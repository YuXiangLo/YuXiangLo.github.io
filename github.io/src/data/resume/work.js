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
    summary: `During my internship, I was fully in charge of training
    a state-of-the-art text-to-speech model, VoiceCraft, in Traditional
    Chinese. I integrated the existing components (data, phonemizer, vall-e)
    with the new model, modifying model to ensure compatibility and optimize
    the model performance using pytorch DDP and numba.  I also trained a
    lyrics-to-melody model using MelodyT5. In this project, I designed a
    dataset that uses pinyin to represent the lyrics and ABC notation for
    the melodies. This compact representation, combined with countdown
    embeddings, has enabled promising performance in music generation.`,
    highlights: [
      'Trained VoiceCraft, a transformer based text-to-speech (TTS) model enabling voice synthesis and editing.',
      'Integrated a customized phonemizer from previous work and a GAN-based vocoder to enhance voice quality.',
      'Enhanced VoiceCraft by integrating VALL-E components, boosting inference performance and quality.',
      'Developed a transformer based lyrics-to-melody model with custom data representation and embedding.',
      'Implemented a countdown embeddings to control the sequence length.',
    ],
  },
  {
    name: 'Institute of Information Science, Academia Sinica',
    position: 'Research Assistant',
    url: 'https://www.iis.sinica.edu.tw/en/index.html',
    startDate: '2023-07-03',
    endDate: '2024-04-01',
    summary: `Researched the application of LLMs for extracting tuple-based demands 
    from web services. During this internship.`,
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
];

export default work;
