import TeamMemberCard from "@/components/team-member";
import AkashImage from "@/assets/team-member/Akash Kulgod.png"
import ItamarBitan from "@/assets/team-member/Itamar Bitan.jpg"
import SahanaShanbag from "@/assets/team-member/Sahana Shanbag.png"
import KiranNagashettikoppa from "@/assets/team-member/Kiran Nagashettikoppa.jpg"
import AkashSudi from "@/assets/team-member/Akash Sudi.jpg"
import Richard from "@/assets/team-member/Richard.jpg"
import ThirumalaiSrinivasan from "@/assets/team-member/Thirumalai Srinivasan G.jpg"
import Sadhu from "@/assets/team-member/Sadhu.jpg"
import MohithTalluri from "@/assets/team-member/Mohith Talluri.jpg"
import Arvind from '@/assets/team-member/Arvind.jpg'
import AswinR from "@/assets/team-member/Aswin R.png"
import AbhijitKadalli  from "@/assets/team-member/Abhijit Kadalli.png"

const teamMembers = [
  {
    name: "Akash Kulgod",
    role: "Co-founder and R&D Lead",
    bio: "Doggedly obsessed with deciphering the canine mind, unleashing disease-sniffing dogs at scale, and nosing towards a foundational olfactory model. Grew up in a family of 11 doctors and a rotating cast of dogs in a tier-2 city in India, went to boarding school in Bangalore, and studied Cognitive Science with Highest Honors at UC Berkeley. Worked as a researcher in 8 labs across 5 countries in linguistics, 4E cognition, psychedelic science, and canine cognitive neuroscience. One of the first to deploy wearable canine brain-computer interfaces to record olfactory signals from disease-sniffing dogs. 2x Emergent Ventures India grantee. Passionate about new-age healthcare models, interspecies technology, and sci-fi uplift.",
    image: AkashImage,
    linkedinUrl: "https://www.linkedin.com/in/akashkulgod/",
  },
  {
    name: "Itamar Bitan",
    role: "Co-founder and Product Lead",
    bio: "Itamar grew up in a small town in Israel and spent 4 years at the Israeli Army’s canine special-ops unit, as a combat-soldier and commander at the bomb detection squad. He then worked for 2 years at an Israeli startup that trained dogs to detect breast cancer and Parkinson’s from breath samples. Itamar leads Product at Dognosis.",
    image: ItamarBitan,
    linkedinUrl: "https://www.linkedin.com/in/itamar-bitan/",
  },
  {
    name: "Sahana Shanbag",
    role: "Clinical Research",
    bio: "Sahana Shanbhag, aka Sasha here! A 25yo, passionate about clinical trials and Research, finding each case a unique learning experience. I have been always captivated by the world of clinical trials, leading me to a fulfilling career path as a Clinical Research Coordinator. My passion for uncovering the intricacies of health and medicine through patient interactions drives me every day. At Dognosis, I find joy in working for Dognosis that aligns with my interests and values , Doggos included ;) . The gratitude patients express for receiving basic healthcare inspires me to strive for excellence and humbles me with a deeper appreciation for life. A fun-loving extrovert with OCD tendencies and a love for good food, I prefer dogs over human companionship. Outside work, I enjoy candid photography, DIY projects, stamp collecting, badminton, and glass painting. As Regional Chief CRC, I aim to elevate clinical standards and empower my colleagues, continually enhancing the clinical side of Dognosis.",
    image: SahanaShanbag
  },
  {
    name: "Kiran Nagashettikoppa",
    role: "Clinical Research",
    bio: "A devoted Clinical Research Coordinator at Dognosis Pvt Ltd with an adequate educational basis, completed schooling in Dandeli and higher education in Hubli, culminating in a Master's degree in Pharmacy (Pharmacology). Traveling and motorcycling are my passions, and I take advantage of each opportunity to visit new places. There is also a deep passion for dogs, which began with the first puppies, Jacky and Tommy.",
    image: KiranNagashettikoppa,
    linkedinUrl: "https://www.linkedin.com/in/kiran-b-nagashettikoppa-0549201b1/",
  },
  {
    name: "Akash Sudi",
    role: "Clinical Research",
    image: AkashSudi,
  },
  {
    name: "Arvind",
    role: "Canine Health",
    image: Arvind,
  },
  {
    name: "Richard",
    role: "Canine Ops",
    image: Richard,
  },

  {
    name: "Thirumalai Srinivasan G",
    role: "R&D Engineering",
    image: ThirumalaiSrinivasan,
  },

  {
    name: "Sadhu",
    role: "Computational Neuroscience",
    image: Sadhu,
  },

  {
    name: "Aswin R",
    role: "R&D Engineering",
    image: AswinR,
  },

  {
    name: "Mohith Talluri",
    role: "VOC Chemistry",
    image: MohithTalluri,
    linkedinUrl: "https://www.linkedin.com/in/mohith-talluri-bb9648187/",
  },
  {
    name: "Abhijit Kadalli",
    role: "Computational Neuroscience Intern",
    image: AbhijitKadalli,
   
  },
]

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection