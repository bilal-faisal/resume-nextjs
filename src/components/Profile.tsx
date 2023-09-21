import Image from "next/image";
import myProfile from "../../public/bilal-faisal-profile.jpg" 

const Profile = () => {
  return (
    <div className="flex justify-center mb-8">
      <Image
        src={myProfile}
        width={150}
        height={150}
        alt="profile"
        priority
        className="rounded-full border-4 border-[#34678C]"
      />
    </div>
  );
};

export default Profile;
