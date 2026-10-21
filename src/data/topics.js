import {
  Brain, Globe, Sparkles, Smartphone, Rocket, GraduationCap,
} from 'lucide-react';

export const topics = [
  {
    key: 'fundamentals',
    name: 'AI Fundamentals',
    path: '/fundamentals',
    description:
      'Understand what AI actually is — from basic machine learning to large language models — and why it matters now.',
    category: 'Core Concepts',
    icon: Brain,
    overview:
      'Artificial Intelligence is the ability of a machine to perform tasks that typically require human intelligence — reasoning, understanding language, recognising patterns, and making decisions. Today\'s AI is largely powered by machine learning: systems that learn from data rather than being explicitly programmed with rules. At the frontier sit Large Language Models (LLMs) like GPT-4, Claude, and Gemini — trained on vast amounts of text to generate, translate, summarise, and reason at a level that was science fiction just five years ago.',
    steps: [
      {
        title: 'Artificial Intelligence (AI)',
        detail: 'The broad field of making computers perform tasks that normally require human intelligence — perception, reasoning, decision-making, and language.',
      },
      {
        title: 'Machine Learning (ML)',
        detail: 'A subset of AI where models learn from examples (data) rather than hand-coded rules. The more data, the better the model gets.',
      },
      {
        title: 'Deep Learning & Neural Networks',
        detail: 'ML using layers of "neurons" loosely inspired by the brain. Powers image recognition, speech, and modern language models.',
      },
      {
        title: 'Large Language Models (LLMs)',
        detail: 'Massive neural networks trained on internet-scale text. They predict the next token — which, at scale, produces remarkably human-like output.',
      },
      {
        title: 'Capabilities vs. Limitations',
        detail: 'AI excels at pattern matching, synthesis, and generation. It still hallucinates facts, lacks true understanding, and needs human oversight for high-stakes decisions.',
      },
    ],
    example: `What AI can do well:
• Summarise a 100-page document in 30 seconds
• Generate production-ready code from a description
• Translate between 100+ languages accurately
• Detect cancer in medical scans with radiologist-level accuracy
• Compose music, write essays, design images on demand

What AI still struggles with:
• Long-term memory across conversations (without tools)
• Perfect factual accuracy — "hallucinations" are real
• Genuine causal reasoning (not just pattern matching)
• Tasks requiring physical embodiment or real-world grounding
• True understanding vs. very sophisticated mimicry

The honest mental model:
Think of an LLM as an extraordinarily well-read autocomplete.
It has absorbed billions of documents and can synthesise
them in seconds — but it does not "know" things the way
you do. It predicts what tokens are likely to come next.
That's both incredibly powerful and genuinely limited.`,
    facts: [
      {
        title: 'GPT-4 trained on ~1 trillion tokens',
        detail: 'A "token" is roughly ¾ of a word. One trillion tokens is more text than a human could read in thousands of lifetimes.',
      },
      {
        title: 'AI surpassed human performance on ImageNet in 2015',
        detail: 'Just 4 years after the deep learning revolution began, machines beat humans at classifying 1 million images.',
      },
      {
        title: 'There are 5 broad "types" of AI tasks',
        detail: 'Generation, classification, detection, prediction, and optimisation — most practical AI falls into one of these buckets.',
      },
      {
        title: '"Hallucination" is a feature of the architecture',
        detail: 'LLMs don\'t look things up — they predict likely tokens. Confident-sounding wrong answers are a fundamental property, not just a bug.',
      },
    ],
  },

  {
    key: 'landscape',
    name: 'The AI Landscape',
    path: '/landscape',
    description:
      'Who are the key players, what are the major model families, and how do different AI categories compare?',
    category: 'Industry Overview',
    icon: Globe,
    overview:
      'The AI industry has restructured faster than any technology sector in history. A handful of frontier labs — OpenAI, Anthropic, Google DeepMind, Meta AI, and Mistral — push the capability frontier. Hyperscalers (Microsoft, Google, Amazon) provide the infrastructure and embed AI into products used by billions. Thousands of startups build applications on top of these foundations. Understanding who does what helps you navigate the landscape as a user, learner, or professional.',
    steps: [
      {
        title: 'Frontier Labs',
        detail: 'OpenAI (GPT series), Anthropic (Claude), Google DeepMind (Gemini), Meta AI (Llama), Mistral AI. These organisations train the most capable foundation models.',
      },
      {
        title: 'Foundation Models',
        detail: 'Large pretrained models (GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, Llama 3.1) that can be fine-tuned or prompted for thousands of downstream tasks.',
      },
      {
        title: 'AI Categories',
        detail: 'Language (chat, coding, writing), Vision (image generation, video, detection), Audio (speech, music), Multimodal (combining two or more), and Agents (AI that takes actions).',
      },
      {
        title: 'Open vs. Closed Source',
        detail: 'Closed models (GPT-4, Claude) are accessed only via API. Open models (Llama 3, Mistral 7B) are publicly downloadable and can be run locally.',
      },
      {
        title: 'The Application Layer',
        detail: 'Companies like Cursor, Perplexity, Midjourney, ElevenLabs, and GitHub Copilot build specialised products on top of foundation models for specific use cases.',
      },
    ],
    example: `Major model comparison (mid-2026):

Model              | Company       | Strengths
-------------------|---------------|---------------------------
GPT-4o             | OpenAI        | Versatile, multimodal, fast
Claude 3.5 Sonnet  | Anthropic     | Long context, safety, coding
Gemini 1.5 Pro     | Google        | 1M token context, multimodal
Llama 3.1 405B     | Meta          | Open source, runs locally
Mistral Large      | Mistral AI    | Efficient, European, open

AI Categories at a glance:
┌─────────────────┬──────────────────────────────────┐
│ Language        │ ChatGPT, Claude, Gemini, Copilot  │
│ Image Gen       │ DALL-E 3, Midjourney, Stable Diff │
│ Video           │ Sora, Runway, Pika                │
│ Audio           │ ElevenLabs, Whisper, Suno         │
│ Code            │ GitHub Copilot, Cursor, Devin     │
│ Search          │ Perplexity AI, Google AI Mode     │
└─────────────────┴──────────────────────────────────┘`,
    facts: [
      {
        title: 'OpenAI was valued at $157B in 2024',
        detail: 'Making it one of the most valuable private companies in history — all from a team of a few hundred researchers.',
      },
      {
        title: 'Meta\'s Llama models have been downloaded millions of times',
        detail: 'Open-source AI democratises access — anyone with a gaming PC can run a capable 7B model locally.',
      },
      {
        title: 'Google has the most AI researchers of any company',
        detail: 'DeepMind alone has produced AlphaFold, AlphaGo, Gemini, and dozens of foundational research papers.',
      },
      {
        title: 'Over 10,000 AI startups were founded between 2022–2024',
        detail: 'The post-ChatGPT application boom created an entirely new startup category — "AI-native" products.',
      },
    ],
  },

  {
    key: 'breakthroughs',
    name: 'Recent Breakthroughs',
    path: '/breakthroughs',
    description:
      'The most important AI milestones of the last few years that changed what machines can do — and what you should know about them.',
    category: 'Advancements',
    icon: Sparkles,
    overview:
      'AI progress has been breathtaking in pace. In 2020, GPT-3 stunned researchers with its fluency. By 2022, DALL-E and Midjourney made image generation consumer-grade. In November 2022, ChatGPT reached 100 million users in 60 days — the fastest product adoption in history. Since then, reasoning models, multimodal systems, AI video, protein structure prediction, and AI coding agents have all crossed inflection points. Each of these breakthroughs has a story, a mechanism, and an implication.',
    steps: [
      {
        title: 'ChatGPT & the LLM consumer moment (Nov 2022)',
        detail: 'OpenAI\'s ChatGPT interface put a frontier-grade language model in the hands of 100M users in 60 days. AI stopped being a research topic and became a product category.',
      },
      {
        title: 'AlphaFold 2 — protein folding solved (2021)',
        detail: 'DeepMind\'s AlphaFold predicted 3D protein structures with near-experimental accuracy, solving a 50-year biological challenge and accelerating drug discovery enormously.',
      },
      {
        title: 'Diffusion models & generative art (2022–23)',
        detail: 'Stable Diffusion, DALL-E 2, and Midjourney made photorealistic image generation accessible to anyone. Artists, designers, and filmmakers faced entirely new creative tools — and competition.',
      },
      {
        title: 'GPT-4 & multimodal AI (2023)',
        detail: 'GPT-4 processed both images and text, passed bar exams in the top 10%, and showed emergent reasoning. The "it\'s just autocomplete" dismissal became much harder to make.',
      },
      {
        title: 'Reasoning models & AI agents (2024–25)',
        detail: 'OpenAI\'s o1, o3, and Claude\'s extended thinking introduced "chain-of-thought at inference time" — models that think before responding, dramatically improving complex reasoning and coding tasks.',
      },
    ],
    example: `Breakthrough timeline:

2017  — Transformer architecture published (Google "Attention Is All You Need")
2019  — GPT-2 released; concerns about misuse
2020  — GPT-3 (175B params): fluent text, in-context learning
2021  — DALL-E 1, CLIP; AlphaFold 2 published
2022  — ChatGPT launched (Nov); Stable Diffusion open-sourced
2023  — GPT-4 multimodal; Claude 1; Llama open-source
        Midjourney V5; AI coding via Copilot explodes
2024  — Gemini 1.5 (1M context); Claude 3.5 Sonnet
        OpenAI o1 reasoning model; Sora video gen
        AI agents: Devin, SWE-agent, AutoGPT
2025  — Llama 3.1 405B; Claude 3.5+ reasoning
        AI-native code editors mainstream (Cursor)
2026  — Multimodal agents; long-horizon task completion
        Models routinely passing PhD-level benchmarks

The "Wow moment" pattern:
Each breakthrough follows the same arc —
  Researchers demo → Experts skeptical → Product ships
  → 100M users → Everyone adjusts expectations → repeat`,
    facts: [
      {
        title: 'AlphaFold predicted ~200 million protein structures',
        detail: 'That\'s essentially every protein known to science — freely available to researchers worldwide.',
      },
      {
        title: 'ChatGPT hit 100M users in 60 days',
        detail: 'Instagram took 2.5 years, TikTok took 9 months. No product in history scaled faster.',
      },
      {
        title: 'Transformers are the architecture behind almost all frontier AI',
        detail: 'The 2017 paper "Attention Is All You Need" by 8 Google researchers is the foundation of GPT, BERT, DALL-E, Whisper, and most modern AI.',
      },
      {
        title: 'AI now writes ~30% of code at Microsoft and Google',
        detail: 'Both companies reported in 2024–25 that a significant portion of their internal code is now AI-generated and human-reviewed.',
      },
    ],
  },

  {
    key: 'daily-life',
    name: 'AI in Daily Life',
    path: '/daily-life',
    description:
      'AI is already embedded in your apps, your healthcare, your search, and your creative tools — often invisibly. Here\'s where it actually shows up.',
    category: 'Practical Impact',
    icon: Smartphone,
    overview:
      'Most people interact with AI dozens of times a day without realising it. Every time YouTube recommends a video, Spotify suggests a song, Gmail completes a sentence, or your phone unlocks via face recognition — AI is working. Since 2022, a second wave of explicitly AI-powered tools has emerged: conversational assistants, AI writing tools, coding helpers, and image generators that are transparent about using AI. Understanding where AI operates helps you use it intentionally rather than passively.',
    steps: [
      {
        title: 'Search & Information Retrieval',
        detail: 'Google AI Overviews, Perplexity, Bing Copilot — AI summarises and reasons across the web, moving beyond keyword matching to intent understanding.',
      },
      {
        title: 'Writing & Productivity',
        detail: 'ChatGPT, Claude, Notion AI, and Gmail Smart Compose help draft emails, reports, code, and creative content — compressing hours of work into minutes.',
      },
      {
        title: 'Creative Tools',
        detail: 'Midjourney, Adobe Firefly, DALL-E, Suno, and ElevenLabs let anyone create professional-quality images, music, and voiceovers without technical training.',
      },
      {
        title: 'Healthcare & Science',
        detail: 'AI analyses medical imaging (radiology, pathology), predicts drug interactions, assists diagnosis, and accelerates clinical trials by orders of magnitude.',
      },
      {
        title: 'Education & Learning',
        detail: 'AI tutors personalise explanations per student, tools like Khan Academy\'s Khanmigo provide Socratic coaching, and language learners use AI conversation partners 24/7.',
      },
    ],
    example: `A day in the AI-assisted life (2026):

7:00 AM  Gmail suggests your reply to a meeting invite
7:15 AM  Spotify's recommendation algorithm picks your morning playlist
8:00 AM  Google Maps uses ML to predict your commute time
9:00 AM  You use Cursor (AI code editor) to write a feature in 20 min
         that would have taken 3 hours manually
10:30 AM Grammarly rewrites a client email for clarity
12:00 PM Perplexity AI answers a research question with citations
2:00 PM  You generate a presentation slide background on Adobe Firefly
3:30 PM  A bank's fraud detection ML flags an unusual transaction
5:00 PM  YouTube recommends a relevant video you hadn't searched for
7:00 PM  Netflix recommends a show with 85% accuracy
9:00 PM  You ask ChatGPT to explain a concept you read about
10:00 PM Your phone face-unlocks — neural network, 300ms

You already live in the AI era.
Most of it just doesn't announce itself.`,
    facts: [
      {
        title: 'Netflix saves $1B/year with its recommendation AI',
        detail: '80% of Netflix watch time comes from AI-suggested content. This is one of the most valuable ML deployments in history.',
      },
      {
        title: 'Google Translate uses AI for 500M+ daily translations',
        detail: 'Neural machine translation dramatically improved quality — some language pairs now approach human-level accuracy.',
      },
      {
        title: 'AI detects diabetic retinopathy better than ophthalmologists',
        detail: 'Google\'s DeepMind system matches or exceeds specialist accuracy — critical in regions without access to eye doctors.',
      },
      {
        title: 'Spotify has 60M+ songs analysed by audio ML',
        detail: 'Models analyse tempo, key, mood, and acoustic properties to power Discover Weekly and Daylist.',
      },
    ],
  },

  {
    key: 'future',
    name: 'The Future of AI',
    path: '/future',
    description:
      'Where is AI heading? AGI, autonomous agents, AI-native science, and what the next 5–20 years might actually look like.',
    category: 'What\'s Next',
    icon: Rocket,
    overview:
      'Predicting AI\'s future is notoriously difficult — researchers who called current capabilities "decades away" were often wrong by years. What\'s clearer is the direction: AI systems are becoming more capable at reasoning, planning, and taking multi-step actions in the world. The shift from AI as a "tool you prompt" to AI as an "agent that acts" is already underway. Longer-term, the open question is AGI — Artificial General Intelligence — a system that can learn and perform any intellectual task a human can.',
    steps: [
      {
        title: 'AI Agents (Now → 2027)',
        detail: 'Agents use language models to plan, use tools, browse the web, write and run code, and complete multi-step tasks. Devin, Manus, and Claude\'s computer use are early examples.',
      },
      {
        title: 'Multimodal AI (Now → 2028)',
        detail: 'Models that seamlessly combine text, images, audio, video, and code. GPT-4o and Gemini are early examples — future systems will be natively multimodal from training.',
      },
      {
        title: 'AI-Native Science (2025–2030)',
        detail: 'AI accelerating drug discovery, materials science, climate modelling, and mathematics. AlphaFold was a preview — expect more "AI wins Nobel Prize" headlines.',
      },
      {
        title: 'AGI — the open question',
        detail: 'OpenAI, Anthropic, and DeepMind all name AGI as their goal. Timelines range from "5 years" (Altman) to "never in current paradigm" (sceptics). No consensus exists.',
      },
      {
        title: 'Societal and economic shifts',
        detail: 'Knowledge work automation, new human-AI collaboration models, regulatory frameworks (EU AI Act, US EO), and the question of who benefits from AI productivity gains.',
      },
    ],
    example: `Likely near-term trajectory (2026–2030):

2026-27  AI agents handle entire software engineering tasks
         "Vibe coding" becomes mainstream — describe features, AI builds
         AI tutors personalise education at scale
         
2027-28  AI-designed drugs enter clinical trials at scale
         Autonomous vehicles become commercially viable in major cities
         Most knowledge workers have an AI "co-worker"

2028-30  Multimodal agents operate across apps independently
         AI contributes peer-reviewed scientific discoveries
         Robotics + AI: general-purpose humanoid robots in warehouses

Longer term (2030+):
  • AGI remains genuinely uncertain
  • Economic disruption accelerates across white-collar jobs
  • Governance frameworks will determine who benefits

What you can be sure of:
  The rate of change will not slow down.
  The skills that matter are shifting —
  from memorisation → reasoning + AI collaboration.
  Learning how to work with AI is now a core literacy.`,
    facts: [
      {
        title: 'Sam Altman believes AGI could arrive by 2027',
        detail: 'OpenAI\'s CEO has publicly stated he expects systems approaching AGI within a few years — a claim contested by many researchers.',
      },
      {
        title: 'The EU AI Act is the world\'s first comprehensive AI law',
        detail: 'Passed in 2024, it bans certain AI uses and requires transparency for high-risk applications — a model other regions are studying.',
      },
      {
        title: 'AI could contribute $15.7 trillion to global GDP by 2030',
        detail: 'PwC estimates this — roughly the combined economies of China and India today.',
      },
      {
        title: 'Physical AI is the next frontier',
        detail: 'NVIDIA\'s Isaac, Figure\'s humanoid robots, and Boston Dynamics\' Atlas show AI moving from language to embodied physical action in the real world.',
      },
    ],
  },

  {
    key: 'careers',
    name: 'Career Roadmap',
    path: '/careers',
    description:
      'How do you build a career in AI? From researcher to ML engineer to AI product manager — concrete roadmaps for each path.',
    category: 'Your Path',
    icon: GraduationCap,
    overview:
      'The AI industry is hiring at every level and across every discipline — you do not need a PhD to work in AI. The key is understanding which role fits your background and building deliberately toward it. Research roles at OpenAI or DeepMind do require deep expertise, but most AI jobs are engineering, product, design, or applied roles that prioritise practical skills. The fastest-growing entry point right now is "AI-augmented engineer" — a software engineer who can effectively use and build with AI tools.',
    steps: [
      {
        title: 'Path 1 — ML/AI Engineer',
        detail: 'Master Python, then numpy, pandas, PyTorch/JAX. Study ML fundamentals (Stanford CS229, fast.ai). Build projects. Target applied ML roles at tech companies or startups.',
      },
      {
        title: 'Path 2 — AI Researcher',
        detail: 'Strong math (linear algebra, probability, calculus). Read papers (Arxiv, Papers With Code). MSc or PhD preferred for frontier labs. Publish or contribute to open-source research.',
      },
      {
        title: 'Path 3 — AI Product Manager',
        detail: 'Understand AI capabilities and limitations deeply. Prior PM experience helps. Companies need people who bridge research, engineering, and customer needs. No ML coding required.',
      },
      {
        title: 'Path 4 — Prompt Engineer / AI Applications Developer',
        detail: 'Learn to design effective prompts, build with APIs (OpenAI, Anthropic, Gemini), and create AI-powered tools. Entry point for builders without heavy ML background.',
      },
      {
        title: 'What OpenAI, Anthropic & DeepMind actually look for',
        detail: 'Frontier labs want exceptional problem-solvers — evidence of deep work, research output, or impressive engineering projects. Culture emphasises intellectual curiosity and safety mindset.',
      },
    ],
    example: `Roadmap to work at OpenAI / Anthropic / DeepMind:

RESEARCH TRACK (2–4 years from a strong CS background)
├── Mathematics: Linear algebra, prob & stats, multivariable calc
├── Deep learning: Backprop, optimisers, transformers, RL
├── Implement papers: Reproduce key results from scratch
├── Publish or contribute to NeurIPS / ICML / ICLR
└── Apply → Research Scientist / Research Engineer

SOFTWARE ENGINEERING TRACK (1–2 years)
├── Python mastery + systems programming (C++/Rust a plus)
├── Distributed systems, GPU programming (CUDA basics)
├── Contribute to OSS AI projects (HuggingFace, PyTorch)
├── Build a portfolio: train a model, deploy it, write about it
└── Apply → Software Engineer (ML Infrastructure, Alignment, Platform)

APPLIED / PRODUCT TRACK (fastest path)
├── Learn the AI landscape — know every major model and tool
├── Build AI-powered projects (apps, automations, agents)
├── Develop strong communication skills
├── Target AI-native companies or AI teams at big tech
└── Apply → AI Product Manager / Solutions Engineer / AI Strategist

Free resources:
• fast.ai — practical deep learning (free, world-class)
• Stanford CS229 / CS224N — ML and NLP (free on YouTube)
• Andrej Karpathy's YouTube — build GPT from scratch
• Anthropic's Responsible Scaling Policy — understand safety
• Papers With Code — find and implement SOTA research`,
    facts: [
      {
        title: 'AI job postings grew 74% in 2023–24',
        detail: 'LinkedIn reported AI-related skills as the fastest-growing requirement across virtually every industry sector.',
      },
      {
        title: 'Senior ML Engineers at frontier labs earn $500K–$1M+ total comp',
        detail: 'Demand dramatically outstrips supply for top AI talent — creating salary levels comparable to elite finance roles.',
      },
      {
        title: "Andrej Karpathy's neural net videos have 10M+ views",
        detail: "The former OpenAI / Tesla AI director's free YouTube tutorials are considered the best introduction to building AI from first principles.",
      },
      {
        title: "You don't need a PhD to work in AI",
        detail: 'Many engineers at frontier labs came via bootcamps, self-study, or traditional CS degrees — demonstrated skills matter more than credentials at most companies.',

      },
    ],
  },
];
