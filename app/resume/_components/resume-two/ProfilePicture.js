import MahbubProfile from '@/assets/images/mahbub.png';
import Image from 'next/image';

const ProfilePicture = () => {
  return (
    <div className="w-[200px] h-[230px]">
        <Image
            src={MahbubProfile}
            alt="mahbub-profile"
            className="object-cover w-full h-full"
        />
    </div>
  )
}

export default ProfilePicture