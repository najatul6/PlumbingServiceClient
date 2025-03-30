import TeamMemberCard from "../common/TeamMemberCard"

const OurTeam = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Mike Johnson",
            position: "Master Plumber",
            experience: "15 years",
            bio: "Specializes in commercial plumbing and large-scale projects.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 2,
            name: "Sarah Williams",
            position: "Residential Plumbing Expert",
            experience: "10 years",
            bio: "Passionate about eco-friendly plumbing solutions.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
        },
        {
            id: 3,
            name: "David Chen",
            position: "Emergency Services Lead",
            experience: "8 years",
            bio: "Available 24/7 for your plumbing emergencies.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        }
    ];

    return (
        <section className="py-16 container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">Meet Our Team</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Licensed professionals dedicated to solving your plumbing problems right the first time.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map(member => (
                    <TeamMemberCard key={member.id} member={member} />
                ))}
            </div>
        </section>
    )
}

export default OurTeam