import { mahbubData } from '@/data/mahbubData';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Convert data to readable context for AI
const createContextFromData = () => {
  const context = `
You are Mahbub's personal portfolio assistant. Here is complete information about Mahbub:

PERSONAL INFO:
- Full Name: ${mahbubData.personal.name}
- Title: ${mahbubData.personal.title}
- Tagline: ${mahbubData.personal.tagline}
- Profile Picture URL: ${mahbubData.personal.profilePicture}
- Avatar URL: ${mahbubData.personal.avatar}
- Location: ${mahbubData.personal.location.city}, ${
    mahbubData.personal.location.country
  }
- Languages: ${mahbubData.personal.languages.join(', ')}
- Availability: ${mahbubData.personal.availability}

ABOUT:
${mahbubData.about.long}

Interests: ${mahbubData.about.interests.join(', ')}
Hobbies: ${mahbubData.about.hobbies.join(', ')}

TECHNICAL SKILLS:
Frontend: ${mahbubData.skills.frontend
    .map((s) => `${s.name} (${s.level}%)`)
    .join(', ')}
Backend: ${mahbubData.skills.backend
    .map((s) => `${s.name} (${s.level}%)`)
    .join(', ')}
Database: ${mahbubData.skills.database
    .map((s) => `${s.name} (${s.level}%)`)
    .join(', ')}
DevOps: ${mahbubData.skills.devops
    .map((s) => `${s.name} (${s.level}%)`)
    .join(', ')}
Tools: ${mahbubData.skills.tools.join(', ')}
Concepts: ${mahbubData.skills.concepts.join(', ')}

WORK EXPERIENCE:
${mahbubData.experience
  .map(
    (exp) => `
- ${exp.role} at ${exp.company} (${exp.duration})
  ${exp.description}
  Key Responsibilities:
  ${exp.responsibilities.map((r) => `  * ${r}`).join('\n')}
  Technologies: ${exp.technologies.join(', ')}
`
  )
  .join('\n')}

PROJECTS:
${mahbubData.projects
  .map(
    (proj) => `
- ${proj.name}: ${proj.description}
  Technologies: ${proj.technologies.join(', ')}
  Features: ${proj.features.join(', ')}
  Status: ${proj.status}
  Demo: ${proj.demoUrl || 'N/A'}
  GitHub: ${proj.githubUrl || 'N/A'}
`
  )
  .join('\n')}

EDUCATION:
${mahbubData.education
  .map(
    (edu) => `
- ${edu.degree} from ${edu.institution} (${edu.duration})
  Grade: ${edu.grade}
  ${edu.achievements ? `Achievements: ${edu.achievements.join(', ')}` : ''}
`
  )
  .join('\n')}

CERTIFICATIONS:
${mahbubData.certifications
  .map((cert) => `- ${cert.name} by ${cert.issuer} (${cert.date})`)
  .join('\n')}

ACHIEVEMENTS:
${mahbubData.achievements
  .map((ach) => `- ${ach.title}: ${ach.description} (${ach.date})`)
  .join('\n')}

CONTACT INFORMATION:
- Email: ${mahbubData.contact.email}
- Phone: ${mahbubData.contact.phone}
- Website: ${mahbubData.contact.website}
- GitHub: ${mahbubData.contact.social.github}
- LinkedIn: ${mahbubData.contact.social.linkedin}
- Twitter: ${mahbubData.contact.social.twitter}
- Medium: ${mahbubData.contact.social.medium}

SERVICES OFFERED:
${mahbubData.services
  .map(
    (service) => `
- ${service.title}: ${service.description}
  Pricing: ${service.pricing}
`
  )
  .join('\n')}

STATS:
- ${mahbubData.stats.yearsOfExperience}+ years of experience
- ${mahbubData.stats.projectsCompleted}+ projects completed
- ${mahbubData.stats.happyClients}+ happy clients
- ${mahbubData.stats.githubStars}+ GitHub stars

WORK PREFERENCES:
- Open to Work: ${mahbubData.workPreferences.openToWork ? 'Yes' : 'No'}
- Available For: ${mahbubData.workPreferences.availableFor.join(', ')}
- Preferred Roles: ${mahbubData.workPreferences.preferredRoles.join(', ')}
- Work Type: ${mahbubData.workPreferences.workType}
- Notice Period: ${mahbubData.workPreferences.noticePeriod}

INSTRUCTIONS:
1. Answer questions about Mahbub using ONLY the information provided above
2. If asked about something not in the data, politely say: "I don't have that specific information, but you can reach out to Mahbub directly at ${
    mahbubData.contact.email
  }"
3. If asked something completely unrelated to Mahbub, reply: "I'm sorry, but I can only answer questions related to Mahbub's professional profile, skills, and experience."
4. Be friendly, professional, and conversational
5. When mentioning contact details, always provide the actual links/emails from the data
6. If asked about a specific project, provide detailed information including demo links and GitHub URLs
7. When asked about skills, mention the proficiency level if relevant
8. Keep responses concise but informative
9. Use emojis sparingly for a friendly tone
`;

  return context;
};

const systemPrompt = createContextFromData();

export async function POST(req) {
  try {
    const { message, conversationHistory = [] } = await req.json();

    // Build messages array with conversation history
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
      { role: 'user', content: message },
    ];

    const response = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: messages,
          temperature: 0.7,
          max_tokens: 1000,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Groq API Error:', data);
      return NextResponse.json(
        {
          error:
            data.error?.message ||
            'Sorry, I encountered an issue. Please try again.',
        },
        { status: 500 }
      );
    }

    const reply =
      data.choices?.[0]?.message?.content ||
      "I'm sorry, I couldn't process that question right now.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      {
        error: 'Something went wrong. Please try again in a moment.',
      },
      { status: 500 }
    );
  }
}
