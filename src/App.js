import ProfileCard from "./profileCard";

function App() {
    const profiles = [
        { title: "Alexa", handle: "@alexa99" },
        { title: "Cortana", handle: "@cortana32" },
        { title: "Siri", handle: "@siri01" },
    ];

    return (
        <div>
            {profiles.map((profile, index) => (
                <ProfileCard key={index} title={profile.title} handle={profile.handle} />
            ))}
        </div>
    );
}

export default App;
