/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Taiwan AI Labs',
    position: 'Music Team ML Intern',
    startDate: '2024-04-08',
    summary: `During my internship, I was responsible for training a state-of-the-art 
    text-to-speech model, *voicecraft*, in Traditional Chinese. This task was particularly 
    challenging due to the complexities of Chinese pronunciation compared to English and 
    other languages. I combined the work done by my colleagues with the new model, modifying setup 
    to make them compatible to each, and build an maintainable environment for further developments. 
    Overall, I gained experience in processing multimedia data and scheduling workflows from data 
    cleaning to model training. Additionally, I refactored the code to improve readability.`,
    highlights: [
      'Familiarized with CI/CD and Kubernetes.',
      'Collaborated effectively with colleagues.',
      'Applied LoRA to a PyTorch-based model, involving modifications to torchaudio’s conformer.',
    ],
  },
  {
    name: 'Institute of Information Science, Academia Sinica',
    position: 'Research Assistant',
    url: 'https://www.iis.sinica.edu.tw/en/index.html',
    startDate: '2023-07-03',
    endDate: '2024-04-01',
    summary: `Researched the application of LLMs for extracting tuple-based demands 
    from web services. During this internship, I learned data collection, preprocessing, 
    labeling, and fine-tuning on pretrained models. We also explored advanced techniques 
    like LoRA and designed customized prompts to achieve better results.`,
    highlights: [
      'Gained proficiency with Hugging Face models and their interfaces.',
      'Mastered data fine-tuning and processing techniques.',
      'Applied advanced techniques like LoRA to existing models.',
    ],
  },
  {
    name: 'Full Stack Web Project',
    position: 'Backend Developer',
    url: 'https://github.com/YuXiangLo/full-stack-web',
    startDate: '2023-05-01',
    endDate: '2023-06-01',
    summary: `Collaborated with teammates on a full-stack project (React + Node + MongoDB). 
    I was responsible for middleware and backend development, building APIs for the frontend, 
    and connecting to the database.`,
    highlights: [
      'Developed RESTful APIs to maintain a consistent style.',
      'Created efficient algorithms to optimize server usage.',
      'Implemented asynchronous functions for multitasking.',
    ],
  },
  {
    name: 'APCS Camp',
    position: 'Instructor',
    url: 'https://apcs.camp',
    startDate: '2023-07-31',
    endDate: '2023-08-11',
    summary: `APCS (Advanced Placement Computer Science) Camp helps high school students 
    with a strong interest in programming to pass the APCS exam, similar to AP courses in the US. 
    I taught loops and arrays to high school students.`,
    highlights: [
      'Collaborated with peers to discuss course content and prepare handouts.',
    ],
  },
];

export default work;
