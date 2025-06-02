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
    position: 'ASR/Music Team ML Intern',
    url: 'https://www.ailabs.tw/',
    startDate: '2024-04-08',
    endDate: '2025-03-31',
    summary: `As an intern on the ASR/Music Team, I was responsible for training a state-of-the-art text-to-speech model,
    VoiceCraft, in Traditional Chinese. I integrated existing components—including datasets, a phonemizer, and
    VALL-E modules—into the new pipeline, modifying the model for compatibility and optimizing performance using
    PyTorch DDP and Numba. In addition, I trained a lyrics-to-melody generation model based on MelodyT5. For this,
    I designed a compact dataset format using pinyin for lyrics and ABC notation for melodies. This approach,
    combined with countdown embeddings, achieved encouraging results in music generation tasks.`,
    highlights: [
      'Trained VoiceCraft, a transformer based text-to-speech (TTS) model enabling voice synthesis and editing.',
      'Integrated customized phonemizer, VoiceCraft, and GAN-based vocoder to enhance voice quality.',
      'Enhanced VoiceCraft with two-stage inference using VALL-E components.',
      'Developed a transformer based lyrics-to-melody model with custom data representation and embedding.',
      'Implemented countdown embeddings to align the number of melody notes with lyric words.',
    ],
  },
  {
    name: 'Institute of Information Science, Academia Sinica',
    position: 'Research Assistant',
    url: 'https://www.iis.sinica.edu.tw/en/index.html',
    startDate: '2023-07-03',
    endDate: '2024-04-01',
    summary: `Researched the use of large language models (LLMs) for extracting tuple-based service demands from
    web services. This role marked my first full-cycle involvement in LLM research, where I gained hands-on
    experience in data cleaning, pipeline design, and model tuning. I contributed to every stage of the project,
    from dataset construction to experimental evaluation and paper writing.`,
    highlights: [
      'Co-authored a paper on service demand extraction using large language models (LLMs), presented at SCC 2024.',
      'Increased input/output extraction accuracy from 56%/48% to 97%/98%, surpassing previous methods.',
      'Built a custom dataset from LeetCode, enhancing training data quality for service demand extraction tasks.',
      'Optimized prompt design, improving model reasoning accuracy by 15% through Chain-of-Thought techniques.',
      'Reduced input/output extraction time by 40%/50%, significantly improving efficiency.',
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
      'Teaching high school students of C++ programming.',
    ],
  },
  {
    name: 'APCS Camp',
    position: 'Teaching Assistant',
    url: 'https://apcs.camp',
    startDate: '2022-07-31',
    endDate: '2022-08-11',
    highlights: [
      'Teaching high school students of C++ programming.',
    ],
  },
];

export default work;
