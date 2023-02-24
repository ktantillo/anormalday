const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }


    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
    }
})

}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <=0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)

}

const textNodes = [
    {
        id: 1,
        text: "Ugh.  Mornings are the worst. A quick glance at your phone tells you it's 7:50, and you know in about ten minutes your alarm will shrill out from the device. Quickly you spin up the mental calculus,  as you decide what's worse, living with your aching need to pee or the shock of cold you know youll feel as you throw off your covers." ,
        options: [
            {
                text: "Get out of bed, lazy ass, you have shit to do today. Also, you really, really do need to pee.",
                nextText: 2,            
            },
            {
                text: "You'll pry my last ten minutes of warmth out of my cold, dead hands. Stay in bed till the last possible moment. ",
                nextText: 11,
            },
            {
                text: "Get up, pee, and then go back to bed. Everything sucks and whatever you need to do today can't be that important.",
                nextText: 16,
            }
        ]
    },
    {
        id:2,
        text: "With great courage and gusto you fling the warm blankets off and throw yourself out of bed. After a quick trip to the restroom, you stroll down the hall towards the kitchen and the caffeine that might make you appear functional for a few hours. On the way you pass the hall closet and to your annoyance it’s glowing slightly red again, and getting closer, you can hear that goddamn chanting from it.",
        options: [
            {
                text:"Ignore it, no one has time for paranormal shenanigans today.",
                nextText:3,
            },
            {
                text:"Throw the presence there an appeasing bone.",
                nextText:20,
            },
        ]
    },
    {
        id:3,
        text: "As you have so many times before, you ignore that dumpster fire of a distraction and head on down the hall. You have way too many real problems to deal with today to bother with whatever satanic tomfoolery has created a portal between your clean towels and hand sanitizers. You continue down the hall. ",
        options: [
            {
                text:"That's right, best to ignore problems for as long as possible, no trouble ever comes from that.",
                nextText:4,
            }
        ]
    },
    {
        id:4,
        text: "Arriving at the kitchen and the blessed sugar and caffeine that will make the following day just a little easier. You think refilling the water basin on the coffee maker is just a momentary delay. How naive. When you flick on the water in your kitchen sink instead of the rush of fluoridated municipal water you expect….instead out oozes a red viscous liquid. That one…is new. ",
        options: [
            {
                text:"Going without coffee isn't an option. Search the fridge for a suitable liquid.",
                nextText:5,
            },
            {
                text:"Maybe just stop at the coffee shop on the way  to work?",
                nextText:27,
            },
            {
                text:"Fortune favors the bold, use the liquid…it's probably just extra protein.",
                nextText:28,
            },
        ]
    },
    {
        id:5,
        text: "Nope, there will be no delays today. You throw open your fridge and hunt through boxes of old take out and expired cheeses for some sort of liquid that would reasonably produce coffee. Aaannnddd There! In the back! Half a bottle of tonic water you forgot about! Sure seltzer water isn't optimal…but consider the alternatives… ",
        options: [
            {
                text:"You make your hard won coffee",
                nextText:6,
            }
            
        ]
    },
    {
        id:6,
        text: "After making your coffee you glance at your watch. After the slight delay this morning you're running a few minutes behind for work. You can rush and hope you make your bus, or you can drive and take your time, but need to eat the expense of downtown parking. ",
        options: [
            {
                text:"No chances today. Take your time to get put together and drive in. If today goes to plan the parking fee won't matter. ",
                nextText:7,
            },
            {
                text:"Ugh, downtown parking is a scam. 20 dollars for a parking spot?! Take your chances with the bus.",
                nextText:17,
            }
        ]

    },
    {
        id:7,
        text:"You arrive at the office dressed to the nines, focused, and ready. Even so, you can't help but be nervous, today is huge for you, after all. Out of the corner of your eye you….see the old, well-woman, slithering out towards you. People say…she can be helpful…when she chooses to be… ",
        options: [
            {
                text:"NOPE. No well-woman redonkulous news for you. You have this on your own.",
                nextText:8,
            },
            {
                text:"It can't hurt to talk to her right? After all she came all this way out of the abyss to talk to you… ",
                nextText:34,
            }
        ]
    },
    {
        id:8,
        text:"You shake yourself to clear your momentary lapse of judgment. You don't need some stinky well-woman to help! You've got this! You have spreadsheets! Bulleted Items! Exel! Soggy good fortune would just throw you off. With your new-found confidence you breeze into the conference room you reserved to set up.",
        options: [
            {
                text:"Don't forget to put out the bagels and imp repellent!",
                nextText:9,
            },
            
        ]
    },
    {
        id:9,
        text:"Alright, here it is! You've prepped for  this, practiced your talking points, and mentally rehearsed all the questions. Your proposal to Mr. Maguffin seems to be going as well as it could. You've captivated your audience and have been on beat. Finally, you reach the last slide of your elaborate presentation and lock eyes across the filled table to the only opinion that matters. Mr. Macguffin raises a single eyebrow and gruffly mumbles, “You know, most people put some effort into what they bring me.” You stare at him in shock. You had charts! Exel! You commissioned an oil painting for this! Could he be...kidding?",
        options: [
            {
                text:"He must be joking. What a funny guy, *so fun*.",
                nextText:10,
            },
            {
                text:"Apologize! Right now! Offer him money! Sex! A lifetime Costco membership! Whatever it takes!",
                nextText:37,
            }
        ]
    },
    {
        id:10, 
        text:"You decide he must certainly be joking. You half smile back.“Well you have to admit it's pretty good for starting just this morning.” Mr. Macguffin bursts into what most would describe as a guffaw. Following his lead the rest of the room starts to laugh as well. The executives laugh and laugh for a bit longer than most of the room is comfortable with, but no one wants to be the one who doesn't laugh as long as Mr. MacGuffin. Your proposal is accepted! This is huge for you and your career! Mr. MacGuffin is, in fact, so impressed he takes you out to a working lunch that stretches out till the end of the day. You're on cloud 9 all the way up until you crawl into bed that night. As you drift off to sleep, the faint sound of chanting reaches you from the hall. You roll your eyes, with the promotion that's sure to come out of today you’ll be moving to an apartment inside the bloodstone barrier, that's for sure.",
        options: [
            {
                text: "Congrats! You did a business! Maybe try for a more fun ending now?",
                nextText:1,
            }
        ]    
    },
    {
        id:11,
        text:"You close your eyes, you know 10 minutes isn't really long enough to go back to sleep, but still the moment of rest is nice. Besides, the alarm seems to scare off whatever foolishness seems to be going on with that portal in the hall closet. All too soon your alarm shrills into life, you know it's time to get up but…man…you do not want to move. ",
        options: [
            {
                text:"Doesn't matter. Get up and go!",
                nextText:4,
            },
            {
                text:"Ugh, not ready, will 15 minutes really hurt?",
                nextText:12,
            }
        ]
    },
    {
        id:12, 
        text:"You smack the snooze option and close your eyes for just a few more minutes. You rationalize that this time will be good for like, reflection….and….affirmations….and junk. But, all too soon the same ear piercing ring comes out of your phone. But…man….it's starting to feel more like you can't get up…like there's a weight on you holding you down…",
        options: [
            {
                text:"Shake it off. You really do have shit to do today.",
                nextText:13, 
            },
            {
                text:"Really…you can’t get up. What's happening?",
                nextText:14,
            }
        ]
    },
    {
        id:13,
        text:"You try to sit up but…can't?  It almost feels like something is grasping at you, trying to hold you back as you do so. It's like invisible vines, no claws?, are grasping at you and holding you back. Panicked, you throw yourself up as hard as you can, chest heaving, muscles straining.  Finally, with as much force as you can muster, you rip yourself out of bed with an audible pop. That's a new one for sure, but thinking about it, Craig, the guy next door, had said something about a sloth demon the other week? You didn't remember well, you had assumed he was trying to get laid. You shake yourself off and head to the kitchen for coffee. Caffeine is by far the best cure for close calls with otherworldly forces. ",
        options: [
            {
                text:"Just some coffee to wash down the near death experience. It’s fine. Everything’s fine.",
                nextText:6,
            }
        ]
    },
    {
        id:14,
        text:"You try to sit up but…can't?  It almost feels like something is grasping at you, trying to hold you back as you do so. It's like invisible vines, no claws?, are grasping at you and holding you back. Try as you might, you can't get out of bed, so, really, why bother? You close your eyes and drift off to sleep. ",
        options: [
            {
                text:"Really, nothing today was that important was it? ",
                nextText:15,
            }
        ]
    },
    {
        id:15,
        text:"Weeks from now, when the stench leads your landlord to break into your apartment, they find you. Pinned to your bed in a pool of your own filth, you lay somehow still living, but far from what most would call alive. Thermal scans show the cause, a massive Sloth Demon, all bulging veiny flesh, mosquito wings, and long, angry spear of a mouth, pinning you down, helping itself to your life force. It filled the room with its imperceivable putrid hides, gooey webs, and pulsing egg sacs.  Your landlord rolls his eyes, not just because he knows this will take weeks to clean up, but because he's pretty sure he forgot to fumigate for these on time, and forging that paperwork to avoid litigation is going to be a huge pain in the ass.",
        options: [
            {
                text:"Wow. Gross. Try again? ",
                nextText:1, 
            }
        ]
    },
    {
        id:16,
        text:"You decide to get up, pee, and then go back to bed. What was going on today anyway? You can't really remember. Anyway, an extra 20 minutes in bed cant hurt.40 minutes later you hear your “oh shit” emergency alarm. Oh fuck, it’s today? Today is that thing that’s so important?? You feel really tired anyway…weirdly….oppressively tired…",
        options: [
            {
                text:"You’re late anyway so it doesn’t matter, just go back to sleep… ",
                nextText:15,
            },
            {
                text:"Holy fuck, get up, get up, get up, go!",
                nextText:17,
            }
        ]
    },
    {
        id:17, 
        text:"You rush into work, disheveled and out of breath. It's only a few minutes before you're due to start and you have almost no time to set up…and you look awful - wrinkles, hair a mess, and you think one of your shoes is untied. You feel like you have zero chance of impressing anyone in your super important work meeting. As you try to figure a way out of this….you see the Old Well-Woman from the lobby crawling up and out of the abandoned elevator shaft. Some people….say she's helpful? When she chooses to be?",
        options: [
            {
                text:"No, not worth the risk. Best to do the best you can with how it is.",
                nextText:18,
            },
            {
                text:"Can't hurt to talk to her? After all she slithered all the way up here…",
                nextText:34,
            },
            {
                text:"Wait, what if I just reschedule? Tomorrow will surely be better for this.",
                nextText:1,
            }
        ]
    },
    {
        id:18,
        text:"No, deals with the supernatural are for the desperate and the occasional holiday party. Your appearance, the data charts you haven't hung yet,  and those little chocolate-filled croissants aren't what this is about, it's you and your ideas! You take a deep breath and walk in. You got this. ",
        options: [
            {
                text:"The look on Mr. Macguffin's face tells you you do not, in fact, got this.",
                nextText:19,
            }
        ]
    },
    {
        id:19,
        text:"Mr. MacGuffin glares at you as he slowly and ominously closes his briefcase. “Is this some kind of joke to you? I don’t have time for half-assed shenanigans. You try to stagger out a believable explanation, something about imps, it’s imp season after all. He stops you with a wave. “If you can't take the proper precautions and be here, presentable and on time on your own, then you are far from ready for any position in such a very important company as mine. Clean out your desk.” As you ride the elevator down, holding your sad “I’m fired” box containing a desk plant and some stolen pens, you think of all the choices you could have made differently. Somehow, you picked the ones that lead to your worst life,with you and your plant fated to move back in with your parents in your 30s.",
        options: [
            {
                text:"Sheesh, he really seemed mad. Maybe give it another go?",
                nextText:1,
            }
        ]
    },
    {
        id:20, 
        text:"You know you need to take care of this, for real, sooner or later, but for right now, you grab one of the cured beef bones that someone on yahoo answers recommended for this. But, as you throw it down into the abyss, a dog comes out of nowhere and runs after the bone. Where the hell did a dog come from?  One of those short legged weiner dogs…..a little dog…named….Charlie? Your little dog named Charlie? ",
        options: [
            {
                text:"Nope! Not your dog, you don't have a dog! Let's get back on track! ",
                nextText:3,
            },
            {
                text:"Charlie! My sweet baby angel! I can't let him go down there!",
                nextText:21,
            }
        ]
    }

]

startGame()