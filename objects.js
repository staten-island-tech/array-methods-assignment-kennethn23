const agents = [
    {
        name: "Jett", 
        release: "April 7, 2020", 
        role: "Deulist", 
        abilities: ["Drift", "Cloudburst", "Updraft", "Tailwind", "Blade Storm"],
    },
    {
        name: "Neon", 
        release: "January 11, 2022", 
        role: "Deulist", 
        abilities: ["Fast Lane", "Relay Bolt", "High Gear", "Overdrive"],
    },
    {
        name: "Killjoy", 
        release: "August 4, 2020", 
        role: "Sentinel", 
        abilities: ["Nanoswarm", "Alarmbot", "Turret", "Lockdown"],
    },
    {
        name: "Harbor", 
        release: "October 18, 2022", 
        role: "Controller", 
        abilities: ["Cascade", "Cove", "High Tide", "Reckoning"],
    },
    {
        name: "KAY/O", 
        release: "June 22, 2021", 
        role: "Initiator", 
        abilities: ["Frag/Ment", "Flash/Drive", "Zero/Point", "Null/CMD"],
    },
]

agents.forEach((agent) => console.log(agent.name));
agents.forEach((agent) => console.log(agent.abilities));
console.log(agents.filter((agent) => agent.role === "Deulist"));