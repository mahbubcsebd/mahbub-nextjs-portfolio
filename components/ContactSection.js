import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = () => {
  return (
    <div id="contact" className="mb-14 lg:my-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
