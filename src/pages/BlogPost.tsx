import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import candidateTeam from "@/assets/candidate-team.jpg";
import candidateApp from "@/assets/candidate-app.jpg";
import squishyTeam from "@/assets/squishy-team.jpg";
import squishyLogo from "@/assets/squishy-logo.jpg";
import hoeftTmBanner from "@/assets/hoeft-tm-banner.png";
import responsibleAiConsulting from "@/assets/ethical-ai-consulting.jpg";
import { ReactNode } from "react";

interface PostData {
  title: string;
  date: string;
  tag: string;
  content: ReactNode;
}

const postContent: Record<string, PostData> = {
  "insights-on-ethical-and-responsible-ai-usage-within-consulting": {
    title: "Insights on Ethical and Responsible AI Usage Within Consulting",
    date: "May 2026",
    tag: "AI & Consulting",
    content: (
      <>
        <motion.div
          className="rounded-sm overflow-hidden mb-8"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={responsibleAiConsulting}
            alt="Responsible AI usage in consulting"
            className="w-full h-auto"
          />
        </motion.div>

        <p className="text-muted-foreground leading-relaxed text-base">
          Over the past year, I’ve immersed myself in the field of consulting. I have interviewed for consulting internships, held leadership positions within student-run consulting firms, delivered recommendations in high stakes client engagements, and spent countless hours crafting PowerPoint presentations. Now, don’t get me wrong, I love this field. I love the time I spend whiteboarding and problem solving with my team, discussions I have with our clients, and grinding to learn about new fields (Hit me up if you ever need to know about the hospital procurement process!). The speed and importance of the work I’m doing give me an irreplaceable fulfillment and thrill.
        </p>

        <p className="text-muted-foreground leading-relaxed text-base">
          However, those feelings don’t come with every aspect of the job, making it a top field for workers to embrace AI. Associates are now always told to problem solve and make slide designs with a generative AI, which has led AI to be a daily presence and driver behind many recent scandals in the consulting industry. This combination of time-consuming tasks that can be optimized by genAI and scattered AI training methodologies call for a structured responsible AI framework.
        </p>

        <p className="text-muted-foreground leading-relaxed text-base">
          After spending classes learning from panelists and industry professionals on AI integration, I shifted my focus to looking through three widely adopted AI frameworks: IEEE’s Ethically Aligned Design (EAD1e), OECD AI Principles, and the EU AI Act.
        </p>

        <div className="space-y-4">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              IEEE's Ethically Aligned Design (EAD1e)
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              An engineering-rooted framework built around seven general principles: human rights, well-being, data agency, effectiveness, transparency, accountability, and awareness of misuse. This AI is specifically interesting for product development and tech consultants, as it embeds ethics at the design stage rather than treating it as a compliance checkbox. The most operationally relevant principles are transparency and accountability, ensuring that AI decisions are well-backed and that any biases are detectable for minimal mistakes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              The OECD AI Principles
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              The Organization for Economic Co-operation and Development created this framework in 2019 and updated it in 2024 after the rise of genAIs like ChatGPT. This is the first intergovernmental AI standard, endorsed by 47 countries. They center on five values: inclusive growth and well-being, human-centred fairness, transparency and explainability, robustness and safety, and accountability. While this framework is tailored to policymakers and organizations rather than engineers, it still has validity for consultants working on international and large scale projects as this framework is a one-size-fits-all that prioritizes international cooperation. Through its flexible guidance that works across legal systems, it has become one of the most globally influential reference points for responsible AI governance.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              EU AI Act
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              The European Union has gone a step farther. Rather than articulating and suggesting ethical principles, the EU AI Act is a completely binding law that classifies AIs by their risk level: unacceptable, high, limited, and minimal on the AI’s transparency, human oversight, and data protection. This way, the EU can add strict requirements to high risk systems and even ban certain AI systems completely. It is the first comprehensive AI law by a major global economy, and its risk-based classification structure has already influenced national AI strategies and regulatory frameworks beyond the European Union.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-border my-12" />

        <div>
          <p className="text-muted-foreground leading-relaxed text-base">
            These analyses have led me to brainstorm the three most important pillars for consulting-specific initiatives: <strong>transparency, security, and intelligence</strong>.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Transparency
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Within transparency, accountability and accuracy are two of the most important qualities each AI should have, as you never want to give clients flawed or incorrect insights. All research must have valid, non AI-generated sources to minimize flawed or hallucinated data. In terms of AI models, they must be built to recheck outputs without human prompting, but consultants themselves should know to independently verify data, links, and statistics before any client-facing use. Most importantly, final conclusions and recommendations should never be AI-generated. Instead of treating AI as a taboo topic, we must instead teach that why it is a strong research and analysis tool, the consultant must own the judgement and decision-making.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Security
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Security, covering data governance, data agency, and human oversight, protects both the client and the firm. This operates on two levels: consultant behavior, such as never inputting raw client data into consumer-facing AI tools, and firm-level tooling, meaning enterprise-grade AI platforms with enforceable data agreements and access controls. Human oversight ensures that no AI system is leaking data and that there is always a human-in-the-loop to be accountable for the AI to save a firm’s reputation if something does go wrong.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Intelligence
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Intelligence reflects on both the AI’s and consultant’s capacity to improve. On the model side, rapid learning cycles should produce more consistent outputs over time, directly reducing bias as well. For consultants, AI is incredibly useful in compressing the learning curve on unfamiliar industries, enabling quicker engagements, and it’s imperative that consultants know how to properly leverage it, such as using AIs for pattern recognition and memory retention along with learning from it.
            </p>
          </div>
        </div>
      </>
    ),
  },
  "joining-uiuc-hoeft-tm-cohort-xxxii": {
    title: "Joining UIUC's Hoeft Technology and Management Cohort XXXII",
    date: "April 2026",
    tag: "Education",
    content: (
      <>
        <motion.div
          className="rounded-sm overflow-hidden mb-8"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={hoeftTmBanner}
            alt="University of Illinois Hoeft Technology and Management Program banner"
            className="w-full h-auto"
          />
        </motion.div>

        <p className="text-muted-foreground leading-relaxed text-base">
          I'm so excited to share that last week I was admitted into the Hoeft Technology and
          Management (T&M) minor's 32nd cohort! This has been a program I've heard about from the
          first day I stepped foot on this campus, attending the 2026 Women in Engineering
          Orientation and listening to alum Isha Tyle speak about her experience creating projects,
          networking, and just simply having fun in this program.
        </p>

        <p className="text-muted-foreground leading-relaxed text-base">
          As both an aspiring consultant and AI researcher, the balance and intersection between
          technology and business has always been important to me. I can't pinpoint a specific
          "aha" moment that made me discover this passion, but I do know I can credit some of it
          to my parents. Both engineering undergraduates who came to the USA to pursue MBAs, they
          credit their success to this ability and have emphasized the value of thinking both
          strategically and technically. I'm so excited to bolster that ability, not only through
          T&M's course requirements in complementary fields, but also in project management-specific
          TMGT classes. T&M graduates are actively growing their ways of thinking and analysis,
          transforming both their professional and personal lives. Furthermore, every week when my
          dad and I would watch the new Shark Tank episode, I'd watch increasingly more companies
          integrate tech, allowing me to see the multidisciplinary world of technology and
          management blossom. Each episode, I noticed that the successful entrepreneurs were those
          who understood their business strategy from the inside out. However, engineers
          consistently fail to communicate properly and fall short, leading me to value
          communication. People with technical and business knowledge, such as tech strategy
          consultants, are more useful than ever because technology is integrated with almost every
          aspect of our lives. They provide clarity during a time when the future of technology is
          uncertain, transforming them into truly valuable team members. I understand that T&M has
          aligned itself with creating the next generation of this community, making me undoubtedly
          sure that I'll emerge from this program an even better speaker, communicator, and
          businesswoman.
        </p>

        <p className="text-muted-foreground leading-relaxed text-base">
          More specifically, over the past semester, I have discovered my alignment with strategy
          consulting. In the long term, I hope to be a management or strategy consultant or
          business analyst, specializing in using my AI, quantum computing, and technological
          knowledge, abilities, and passion to drive my decisions and thinking. With the rise of
          generative AI, it has become even more necessary for consultants to develop high-agency
          and high-value skills, a pillar of T&M. I'm currently enrolled in BADM-261, the T&M
          seminar class, which has developed my project proposal, elevator pitch, and case
          interview skills. I know I'll only develop a more strategic skillset over the next two
          years, hopefully turning me into a unicorn in the competitive job market. Furthermore, as
          I've connected with other tech leaders at UIUC, I have learned how the Hoeft T&M program
          sets up engineers for success. T&M's opportunities and alumni network are key to making
          it UIUC's most transformative minor. By providing its participants with resources to
          participate in global pitch competitions and capstone projects, T&M will allow me to
          network globally and forge connections with my cohort that will last a lifetime. With
          T&M's study abroad programs, I know I'll gain a more global and well-rounded perspective
          on business matters, immersing myself in new cultures and markets. Similarly, I have
          always believed that working on capstone projects and connecting with alumni teach
          resourcefulness and ambition, two of my most valued skills, and I honestly can't wait to
          see how they grow over the next two years. Thank you so much to Dr. Geoffrey Love for
          teaching BADM-261 and introducing me to T&M, and to the T&M selection committee for
          seeing my potential to join this program, and I can't wait to see what happens next!
        </p>
      </>
    ),
  },
  "hackathon-season-2026": {
    title: "Hackathon Season 2026: CandiDate & Squishy",
    date: "March 2026",
    tag: "Projects",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed text-base">
          At the start of 2026, I created a Luma and a Devpost account, resolving to compete in more
          hackathons and case competitions this year, so I thought I'd share 2 projects I've worked on so far!
        </p>

        <div className="my-10">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
            🗳️ CandiDate
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              className="rounded-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={candidateApp} alt="CandiDate app interface" className="w-full h-auto" />
            </motion.div>
            <motion.div
              className="rounded-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={candidateTeam} alt="CandiDate team at the hackathon" className="w-full h-auto" />
            </motion.div>
          </div>
          <p className="text-muted-foreground leading-relaxed text-base mb-4">
            CandiDate is an ML-powered application that takes a user-first approach to voting that
            Aminah Bilal, Anna Gerasimenko, Cecilia Hernandez, and I collaborated on to win the{" "}
            <span className="text-accent font-medium">Best for Chicago Track</span> at the Chicago
            Google DeepMind Vibecoding Hackathon.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base mb-4">
            We prompt users to write just a few words on the policy topics most important to them.
            Then, their responses are used to transparently connect them to politicians with similar
            values and opinions. In a time when it may be daunting to navigate political information,
            it is imperative to have a trusted site like CandiDate that removes the confusion and
            redundancy from political surveys.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base">
            We originally created CandiDate to tackle this problem for the Illinois primary elections,
            but now, with the support from the DeepMind team and the organizers of this hackathon,
            Kaya J., Salvador Dueñas, and Landon W. Campbell, we are excited to scale this idea for
            the 2026 Midterms and beyond.
          </p>
        </div>

        <div className="h-px w-full bg-border my-12" />

        <div className="my-10">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
            🤖 Squishy
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              className="rounded-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={squishyLogo} alt="Squishy logo" className="w-full h-auto" />
            </motion.div>
            <motion.div
              className="rounded-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={squishyTeam} alt="Squishy team at the hackathon" className="w-full h-auto" />
            </motion.div>
          </div>
          <p className="text-muted-foreground leading-relaxed text-base mb-4">
            Pivoting to soft hybrid robotics, Advayth Pashupati, Aashima Singh Sisodia, Neev Patel,
            and I placed <span className="text-accent font-medium">3rd on the TRAE track</span> at
            the Respan (formerly Keywords AI) Hackathon, creating Squishy, a multi-agent orchestrated
            platform that streamlines the soft body robotics modeling process.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base mb-4">
            Our creation allows researchers to generate, visualize, and produce PyElastica code with
            minimized hallucinations by routing inputs through Respan to LLMs backed by the Cosserat
            Rod theory.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base">
            We have more information, including our tech stack and inspiration on{" "}
            <a
              href="https://lnkd.in/ghb7qEQ4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Devpost
            </a>
            .
          </p>
        </div>
      </>
    ),
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? postContent[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <p className="text-muted-foreground">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
        </motion.div>

        <AnimatedSection>
          <span className="text-xs tracking-[0.15em] text-accent uppercase">{post.tag}</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            {post.title}
          </h1>
          <p className="text-sm text-muted-foreground mb-12">{post.date}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="space-y-6">{post.content}</div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BlogPost;
