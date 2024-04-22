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
    summary: `Applied LoRA on an existing model. Modified torchaudio Conformer's
    multiheadAttention. I have to say that building music AI is a lot interesting
    compared to LLM, since I can actually **hear** it! Currently, I'm working on
    developing an AI that can compose, based on the input text prompt.`,
    highlights: [
      'Got familiar with CI/CD, kubernetes.',
      'Applied LoRA on a pytorch based model, which involves modifying torchaudio\'s conformer',
    ],
  },
  {
    name: 'Institute of Information Science, Academia Sinica',
    position: 'Research Assistant',
    url: 'https://www.iis.sinica.edu.tw/en/index.html',
    startDate: '2023-07-03',
    endDate: '2024-04-01',
    summary: `Researched how to apply LLM on the web service tuple-based demands 
    extraction. During the internship, I learned how to collect data, preprocess 
    and label data, and fine tune the data on pretrained model. We also try advanced
    techniques like lora and design customized prompt to gain better results.`,
    highlights: [
      'Learned the usage of huggingface model and huggingface model\'s interface.',
      'Got familiar with the details of fine-tuning and processing data.',
      'Applied the advanced technique like lora to the existing model.',
    ],
  },
  {
    name: 'Full Stack Web Project',
    position: 'Backend Developer',
    url: 'https://github.com/YuXiangLo/full-stack-web',
    startDate: '2023-05-01',
    endDate: '2023-06-01',
    summary: `Collaborated with teammates on a full-stack projects (React + Node + MongoDB). 
    I'm in charge of middleware and backend, building api for frontend and binding connection to database`,
    highlights: [
      'Built RESTful API to maintain a good style',
      'Composed good enough algorithm to optimized the server\'s usage',
      'Implemented asynchronous function for multitasking',
    ],
  },
  {
    name: 'APCS Camp',
    position: 'Instructor',
    url: 'https://apcs.camp',
    startDate: '2023-07-31',
    endDate: '2023-08-11',
    summary: `APCS (Advanced Placement Computer Science) Camp aims to help high school
    students with great interests in programming pass the exam APCS. It references AP 
    in US. I'm instructing loop and array to high school students at that time.`,
    highlights: [
      'Cooperated with mates, discussed courses contents and composed handouts.',
    ],
  },
];

export default work;
