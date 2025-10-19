
// Edit this file only to add/update subjects, stages, majors, and questions.
window.UNIZONE = {
  subjects: [
    // EXAMPLES — replace with your list:
    { id: "anat", name: "Human Anatomy", stage: "Stage 2", major: "Medicine", topics: ["bones", "nerves"] },
    { id: "bio",  name: "Biochemistry",  stage: "Stage 1", major: "Medicine", topics: ["metabolism", "enzymes"] },
    { id: "pr",   name: "PR & Media",    stage: "Stage 3", major: "Mass Comm", topics: ["research", "ethics"] }
  ],
  bank: {
    bio: {
      metabolism: [
        {q:"Which coenzyme carries electrons in the electron transport chain?", a:["FAD","FADH2","NAD+","NADH"], correct:3},
        {q:"Glycolysis occurs in the…", a:["Mitochondria","Cytosol","Nucleus","ER"], correct:1},
        {q:"Rate limiting enzyme of glycolysis:", a:["PFK-1","Hexokinase","Pyruvate kinase","Aldolase"], correct:0},
        {q:"Beta-oxidation yields units of:", a:["Glucose","Acetyl-CoA","Lactate","Alanine"], correct:1},
        {q:"ATP synthase is found in:", a:["Outer membrane","Inner membrane","Matrix","Cytosol"], correct:1}
      ],
      enzymes: [
        {q:"Km reflects:", a:["Enzyme affinity","Max velocity","Enzyme concentration","Product level"], correct:0},
        {q:"Competitive inhibitor effect on Km:", a:["Decrease","Increase","No change","Depends"], correct:1},
        {q:"Vmax in competitive inhibition:", a:["Decrease","Increase","No change","Depends"], correct:2},
        {q:"Enzymes are mostly:", a:["Lipids","Proteins","Carbs","Nucleic acids"], correct:1},
        {q:"Allosteric enzymes show:", a:["Hyperbolic","Sigmoidal","Linear","No curve"], correct:1}
      ]
    },
    anat: {
      bones: [
        {q:"The femur is a type of:", a:["Flat","Short","Long","Irregular"], correct:2},
        {q:"Which joint is the knee?", a:["Hinge","Ball and socket","Pivot","Plane"], correct:0},
        {q:"Scapula is a:", a:["Flat","Long","Sesamoid","Short"], correct:0},
        {q:"Vertebrae are:", a:["Flat","Irregular","Sesamoid","Long"], correct:1},
        {q:"Skull sutures are:", a:["Synovial","Fibrous","Cartilaginous","None"], correct:1}
      ],
      nerves: [
        {q:"Cranial nerve for vision:", a:["CN II","CN III","CN IV","CN V"], correct:0},
        {q:"Facial expression nerve:", a:["Trigeminal","Facial","Glossopharyngeal","Accessory"], correct:1},
        {q:"Phrenic nerve roots:", a:["C2–C3","C3–C5","C5–C7","T1–T2"], correct:1},
        {q:"Median nerve injury affects:", a:["Wrist flexion","Ankle dorsiflexion","Knee extension","Hip abduction"], correct:0},
        {q:"Sciatic nerve is from:", a:["Cervical","Lumbar","Sacral","Brachial"], correct:2}
      ]
    },
    pr: {
      research: [
        {q:"Random sampling improves:", a:["Validity","Reliability","Generalizability","Bias"], correct:2},
        {q:"Qualitative method:", a:["Survey","Focus group","Experiment","Structured obs"], correct:1},
        {q:"PR campaign starts with:", a:["Tactics","Objectives","Situation analysis","Budget"], correct:2},
        {q:"KPI example:", a:["Press release","Media impressions","Brainstorm","Raw footage"], correct:1},
        {q:"A/B test compares:", a:["Two random variables","Two versions","Two audiences","Two tools"], correct:1}
      ],
      ethics: [
        {q:"Informed consent is required for:", a:["Internal memo","Human subjects research","Press conference","Ad spend"], correct:1},
        {q:"Conflict of interest means:", a:["Tight deadline","Personal gain risk","Bad copy","Low CTR"], correct:1},
        {q:"Attribution gives credit to:", a:["Team morale","Sources/creators","Budget owners","Stakeholders"], correct:1},
        {q:"Plagiarism is:", a:["Benchmarking","Copying without credit","Sponsorship","Satire"], correct:1},
        {q:"Sensitive data should be:", a:["Shared widely","Kept minimal & secure","Posted to socials","Ignored"], correct:1}
      ]
    }
  }
};
