
window.UNIZONE = {
  subjects: [
    { id: "anat", name: "Human Anatomy", stage: "Stage 2", major: "Medicine",  topics: ["bones", "nerves"] },
    { id: "bio",  name: "Biochemistry",  stage: "Stage 1", major: "Medicine",  topics: ["metabolism", "enzymes"] },
    { id: "pr",   name: "PR & Media",    stage: "Stage 3", major: "Mass Comm", topics: ["research", "ethics"] }
  ],
  bank: {
    anat: {
      bones: [
        {q:"The femur is a type of:", a:["Flat","Short","Long","Irregular"], correct:2},
        {q:"Which joint is the knee?", a:["Hinge","Ball and socket","Pivot","Plane"], correct:0},
        {q:"Scapula is a:", a:["Flat","Long","Sesamoid","Short"], correct:0}
      ],
      nerves: [
        {q:"Cranial nerve for vision:", a:["CN II","CN III","CN IV","CN V"], correct:0},
        {q:"Facial expression nerve:", a:["Trigeminal","Facial","Glossopharyngeal","Accessory"], correct:1}
      ]
    },
    bio: {
      metabolism: [
        {q:"Glycolysis occurs in the…", a:["Mitochondria","Cytosol","Nucleus","ER"], correct:1},
        {q:"Rate limiting enzyme of glycolysis:", a:["PFK-1","Hexokinase","Pyruvate kinase","Aldolase"], correct:0}
      ],
      enzymes: [
        {q:"Km reflects:", a:["Enzyme affinity","Max velocity","Enzyme concentration","Product level"], correct:0},
        {q:"Vmax in competitive inhibition:", a:["Decrease","Increase","No change","Depends"], correct:2}
      ]
    },
    pr: {
      research: [
        {q:"Random sampling improves:", a:["Validity","Reliability","Generalizability","Bias"], correct:2},
        {q:"Qualitative method:", a:["Survey","Focus group","Experiment","Structured obs"], correct:1}
      ],
      ethics: [
        {q:"Plagiarism is:", a:["Benchmarking","Copying without credit","Sponsorship","Satire"], correct:1},
        {q:"Sensitive data should be:", a:["Shared widely","Kept minimal & secure","Posted to socials","Ignored"], correct:1}
      ]
    }
  }
};
