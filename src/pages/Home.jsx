import StorySection from "../components/StorySection"
import VideoSection from "../components/VideoSection"
import Finale from "../components/Finale"
import rue2 from "../assets/rue2.jpeg"
import rue3 from "../assets/rue3.jpeg"
import rue4 from "../assets/rue4.jpeg"
import r3 from "../assets/ruel.jpeg"
import rue5 from "../assets/rue5.jpeg"
import dade from "../assets/dade.mp4"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="bg-light bg-gradient-to-b from-black to-gray-500 text-white font-body">
     <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ overflow: 'hidden', padding:20}}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12"
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gold text-center mt-8 mb-6 px-2 leading-tight"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          💌 My Love Letter to You💌
        </motion.h1>
        <motion.h2 className="text-center text-gold text-xl md:text-2xl mb-8 px-4">
         My love 🤍,
        </motion.h2>
        <motion.p
          className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed text-base md:text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
         



I don’t think you know how long it took me to get here, not because I didn’t feel it, but because I wanted to be sure. I sat with my thoughts, questioned myself, prayed, and took my time. But it’s funny how the heart often knows long before the mind catches up😅

When I finally opened up to a few of my friends, they smiled and said, “We knew you’d get here.” They told me that every time I spoke about Ruramai, there was no pretending, no hiding it, they could see it in my eyes, in my tone, in how softly yet surely I spoke about you. And I’m glad my mind eventually accepted what my heart already knew all along 🤗🤍.

I still laugh when I think about how I was your “talking stage” for literally six days 😅 and then just like that, Mr Botso decided. You became intentional, clear, and steady. You chose me, and from that moment, you’ve never left me guessing. No confusion. No mixed signals. Just consistency. Just reassurance. Just you showing up as my man❤️🫂

Somehow, loving you also looks like ridiculously long calls that start with “I’ll call you for five minutes” and end with us wondering where the time went 😂🤍. Calls full of random stories, laughter, teasing, and moments where neither of us wants to be the first to hang up. Those calls have become my favorite part of the day 🤞proof that even in the simplest moments, you make me a happy girl 😩❤️

One of the things that means more to me than I can ever fully explain is the way you sacrifice your time just to see me. You come to my workplace, knowing you’ll get home late, just to spend a short moment watching me behind the counter, doing my job💊To anyone else it might look small, but to me, it’s everything 🥺🤍. It tells me I matter. It tells me I’m worth the effort. And I never take that lightly, Samanyanga❤️

Being first born yenyu…I’ve No words 😶 thank you for making sure I never lack anything my love. 

And then there’s prayer…
Oh, how I love the way you cover me in prayer 🙏🏽🤍. What more could a girl ask for than a man who stands as her priest, who talks to God about her, who lifts her name before heaven, who cares about her soul as much as her heart? Loving you has drawn and kept me closer to God, and for that, I’m deeply grateful.

I want this relationship to grow, not just in feelings, but in purpose. I never want us to forget why we chose each other. I want us to keep building, keep choosing love, keep choosing God. Together. I believe what we’re doing is bigger than us, it’s about fulfilling God’s purpose side by side and making heaven proud 🤍✨.

So this is me, writing this honestly, joyfully, saying: I choose you. Still. With intention. With faith. With a full heart, till kingdom come 

<motion.p className="text-center text-gold text-xl md:text-2xl mb-1 px-4">
  Happy Valentine’s Day, my love 💌
</motion.p>
<motion.p className="text-left text-gold text-xl md:text-2xl mb-1 px-4">Always yours,</motion.p>
<motion.p className="text-left text-gold text-xl md:text-2xl mb-1 px-4">Mai Samanyanga 🤍</motion.p>
        </motion.p>
      </motion.div>
      <StorySection
        title="01.01.2026"
        text="In the beginning God, 
              Worship, love and a yes I’ll always be grateful for 🤍✨"
        image={rue2}
      />

      <StorySection
        title="06.01.2026"
        text="One negotiation at a time🤣👌laughing our way through life🥰"
        image={rue4}
        reverse
      />
      <StorySection
        title="14.01.2026"
        text="Short visits, Big love ❤️🫂"
        image={rue3}
      />
      <StorySection
        title="17.01.2026"
        text="If we survived this pizza, we can survive anything 🤣🤣🙌"
        image={rue5}
        reverse
      />
      <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 ml-5 mr-5 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
      <motion.h1
      className="text-gold text-2xl font-serif mb-4 text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        >
          <div className="absolute -left-4 top-1/2 w-1 h-6 bg-gradient-to-b from-gold to-yellow-400 rounded-full transform -translate-y-1/2"></div>

          This song carries all the words I cant fully say but feel.
        </motion.h1>
        </div>
      <VideoSection
      title="i dedicate this song to you ❤️🫂"
      video={dade}
      />
      <StorySection
        title="Happy Ever After"
        text="I couldn't make it to be your first but I hope I'll be your last❤️🫂"
        image={r3}
      />
      <Finale />
    </div>
  )
}
