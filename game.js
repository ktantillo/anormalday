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
    },
    {
        id:21,
        text:"You swoop down and grab Charlie just in time, sweeping him up into your arms as a thousand ethereal black hands just miss him. You breathe a huge sigh of relief. You can't believe Charlie did that! As you stare into the coal black eyes of your beloved pet, you ask yourself why he would do such a thing over one stupid cured bone. Though, as you look around your apartment…you realize you don't have a lot of dog toys or treats for him…..or really any? Did…did he go through all of his toys? ",
        optiions: [
            {
                text:"Doesn't matter, you don't really have time for it today. ",
                nextText:22,

            },

            {
                text:"You can’t leave him alone like this when something is wrong. Send a quick email to reschedule and take care of the pupper.",
                nextText:24,
            }
        ]
    },
    {
        id:22,
        text:"You can't think about that right now. As much as you realize you've been neglecting poor lil Charlie over the last few weeks…..it's just because of how important this presentation is. You swear to yourself you will stop at Pets-gr-us on the way home. Still, you are a little worried about how he's acting so strangely this morning…",
        options: [
            {
                text:"Better lock up Charlie in the bathroom, for safety.",
                nextText:23,
            },
            {
                text:"He will be fine, the hall closet stopped glowing and you have this last cured bone for him to enjoy on the couch while you're at work.",
                nextText:38,
            }
        ]
    },
    {
        id:23,
        text:"Better safe than sorry. You grab a few of your old sweatshirts and pajama pants and make a little bed out of them on the bathroom floor, make sure to leave him a bowl of water…I guess you're out of dog food? You close him in and instantly you are met with the most unholy scratching and wailing from the bathroom. Just as it seems the scratching and whining and howling are  completely unbearable…all of a sudden it stops. Thank goodness, you'll be…sure to make it up….to….the….dog...what dog? Why are you standing staring at the bathroom door? Holy cripes, look at the time! ",
        options: [
            {
                text:"Jeepers, it seems like you just zonked out for like 40 minutes! What the hell, you have shit to do today! ",
                nextText:24,
            }
        ]
    },
    {
        id:24,
        text:"You send a quick email delaying that meeting or presentation or whatever, there's no way it's as important as your good boy, Charlie! You scoop him up in your arms (You can't seem to find his leash?) and head out the door, going to the cute little pet boutique down the road. But, as you enter the alleyway shortcut, you hear a sharp hissing sound. Turning towards it, you see a pair of angry red eyes. Fuck! Basilisk! You thought they were in hibernation! God damn global warming.",
        options: [
            {
                text:"Panic! You do not plan to be a pillar of stone for the rest of your life.",
                nextText:25,
            },
            {
                text:"Stay calm, Charlie needs you to protect him after all.",
                nextText:41,
            }
        ]
    },
    {
        id:25,
        text:"You panic and jump backward, dropping Charlie who makes a mournful little cry in the process. You feel guilty, but what else could you do? You see the little snake demon ass-spring towards Charlie. You can't bear to watch what comes next, you turn your head and throw your arms in front of your face to avoid seeing Charlie's gruesome fate. There's the sound of a scuffle..growls…hisses…and then a thump and a triumphant….bark? ",
        options: [
            {
                text:"Did….did your 10 pound dog just kill a demon? Huh. ",
                nextText:26,
            }
        ]
    },
    {
        id:26,
        text:"You lower your arms to see Charlie standing over the dead snake-like creature. His mouth is slightly open and he's….breathing in deeply? Looking closer…there's something like a fume coming off the snake. As you come closer, Charlie's head snaps up, and he glares at you. You didn't know dogs could glare, but that is definitely the look you're getting right now. Charlie walks towards you and you are filled with a wave of guilt. You fall to your knees, compelled to beg forgiveness, you….you…….know that Master is displeased. Master is annoyed. But it is fine. Master knows now you can not be trusted to make your own choices. Master will be in control now. You rise to our feet and gently pick up Master. He has so many plans for the day, and you can not disappoint him again. ",
        optiions: [
            {
                text:"Frankly, I think Charlie probably would be better at making choices than you, how could you drop him??? Maybe try again without committing animal abuse?",
                nextText:1,
            }

        ]
    },
    {
        id:27,
        text:"You roll into the coffee shop at work and…ugh, the line is incredibly long. You stand in line and just flip through your socials while you wait. There we go, youre almost to the front, that was fast its only….oh fuck so much later than you thought. You forget the coffee and rush to the conference room where you are sure people are already gathering. ",
        options: [
            {
                text:"Wow, guess they are right when they say you waste your life away on the phone.",
                nextText:19,
            }
        ]
    },
    {
        id:28,
        text:"Once it goes through the machine the sludge will be fine, yeah sure it will be fine. You brew the coffee with the sludge and gulp it down, you don't really need to savor anything anyway right? You just need to get the caffeine right? And…hey hello? You look really unwell.",
        options: [
            {
                text:"Like, can you hear me?",
                nextText:29,
            }
        ]
    },
    {
        id:29,
        text:"You've been staring straight ahead for like 20 minutes. What's up buddy? Are you going to…oh okay you're moving? Weird, we didn't decide you were going to do that and…you're getting in the car and going…south, that's not the way to work at all. What's going on? Hey hey can you even hear me anymore?",
        options: [
            {
                text:"Come on buddy I need you to snap out of this! ",
                nextText:30,
            }
        ]
    },
    {
        id:30,
        text:"Well we are on the highway now. You're doing your own thing now *I guess*. Can I get a clue to where we are going? Like this is truly creepy you know that right? You're not even listening to your shit podcasts, you're just driving for miles and miles and like…wait when's the last time you blinked? ",
        options: [
            {
                text:"This is so frustrating! I guess I don't have any say in the matter anymore at all?? Like whats even the point now? Youre just going to do whatever.",
                nextText:31,
            }
        ]
    },
    {
        id:31,
        text:"It's been FOREVER like this, you creepy zombie driving, me, talking to myself, you continuing to creepy zombie drive…you know how hard it is to play eye spy by yourself? Oh, wait! You're getting off the highway! We are headed towards….the Pinelands National Reserve? Huh weird.",
        options: [
            {
                text:"Is this about hiking? And because I made fun of those walking shoes you bought last week?",
                nextText:32,
            }
        ]
    },
    {
        id:32,
        text:"You stop abruptly, leaving your car in the middle of the road. Then you walk, and walk and walk into the woods. It's getting to the point that I cant tell if the tree cover is just that complete or if we have been doing this for so long it is getting dark. Just as I think we must be close to walking clear out of the reserves we come to a….door.  A wrought Iron door built directly into the stone of the earth. It's covered in chains and locks, both physical and supernatural.",
        options: [
            {
                text:"Weird doors in the woods are…kinda fun?",
                nextText:33,
            }
        ]
    },
    {
        id:33,
        text:"You set about breaking the locks. You tear at chains and you break seals. It's difficult work and by the time you are done your hands are bruised and bloody but you do not seem to care. You're working with the kind of drive and focus I've only seen you apply to the acquisition of night cheese in the past. Finally, the last barrier is broken, and with a great grinding whine you swing the door open. From deep inside, hoof beats, a snort, and just the slightest sight of a horn. You walk inside, ready to fulfill your final purpose. Before the creature leaves this cage he will feast and grow strong again.",
        options: [
            {
                text:"Well that was bad. But for real, how did you think drinking cursed water was a good idea? Like I feel this one is on you fam.",
                nextText:1,
            }
        ]
    },
    {
        id:34,
        text:"As the Well Woman soggily steps up to you you decide that it's not a problem to just like, hear her out. She comes up to you, opens her mouth, and from her long crone hands she extends a hand at you with a tarnished golden coin between her gnarled fingers. You stare at it for a second and then glance at her face. She squints her sunken eyes at you, opens her mouth as if to speak, but instead a series of angry clicks emerge.",
        options: [
            {
                text:"Okay okay I'll take the stupid coin jeebus!",
                nextText:35,
            },
            {
                text:"There is no way I'm taking that coin. It is 110% cursed.",
                nextText:44,
            }
        ]
    },
    {
        id:35,
        text:"You take the coin from her, you aren't sure what it does or how to use it but she seems to want to have it and you aren't going to make the Well Woman mad. You stand outside the conference room turning the coins over in your fingers? What to do with this thing? ",
        options: [
            {
                text:"Flip it now, for luck.",
                nextText:36,
            },
            {
                text:"Flip it during your presentation, you'll look cool.",
                nextText:46,
            }
        ]
    },
    {
        id:36,
        text:"You flip the coin and it disappears in the air. You look around….uh huh very very weird. You then walk into the conference room and its….wow. It's over the top in there. There is a caterer serving made to order omelets, full color print outs of all your charts, and uh, an espresso fountain? This is a little much. Mr. McGuffin gives you a look. “Did you bring that water weirdo into this?” ",
        options: [
            {
                text:"…Mayyybee. Your heart sinks and he signs.",
                nextText: 37,
            }
        ]
    },
    {
        id:37,
        text:"He shakes his head, clearly not happy with what you have to say.“That's not really the response I expect from someone at my company. Your ideas are good, so I am totally going to use them, but I'm not sure *you* are the person I want heading them up.” So there it is. All your hard work and just one blunder means instead of heading up your hard work you are going back to the cubical for minimum wage and someone else will head the project you created. Well, I guess the day could have gone worse but man, this still does not seem fair.",
        options: [
            {
                text:"Womp womp, tho I promise you today could have gone a lot worse. Wanna see for yourself?",
                nextText:1,
            }
        ]
    },
    {
        id:38,
        text:"Charlie will be fine, you don't have time to overthink it. You give him the last cured bone and resolve to stop on the way home to get him toys, and food, and…bowls? Man you have been neglectful. You plop him on the couch, scratch behind his ears, and head out.",
        options: [
            {
                text:"Wait, is he…smirking as you leave the room?",
                nextText:39,
            }
        ]
    },
    {
        id:39,
        text:"The second you are gone Charlie jumps from the couch and beelines to your bedroom. He dashes under your bed and then pulls out a box. This is a pretty special box to you. Its filled with your photos and yearbooks, mementos of people you have loved and lost. Charlie opens his mouth and starts to…breathe in…your memories? As he does he seems to grow and swell unnaturally and your beloved mementos crumble to dust. Once hes has consumed that he goes to your closet to gorge himself more on the sentiment and spirit contained in your most beloved objects.",
        options: [
            {
                text:" Bad dog Charlie! Bad! Stop eating that emotional essence! ",
                nextText:40,
            },
        ]
    },
    {
        id:40,
        text:"As you are driving down the highway chilling out to the soothing voice on MPR describing a method of producing foie gras without  force feeding imps, you are jarred as a piercing emergency broadcast alarm cuts through. The robotic voice commands all listeners to seek shelter and to flee the city while warning that the bridge near your apartment  has already been crushed by a creature. As you turn a corner you see it, massive angry creature black and tan in color and…weirdly dog like? You see it picking up cars and breathing deeply with them near its snoot like maw, a thin blue essence coming out of the cars and being swallowed by the creature. You decide maybe it's best to get out of town for a while. You spin the car around and head as fast as you can to your aunt Merties place in the country. Sure the wifi is bad but there's less chance of demonic death so it seems worth it.",
        options: [
            {
                text: "Enjoy Merties pepper pie! Or maybe see if you can do things a little differently?",
                nextText:1,
            }
        ]
    },
    {
        id:41,
        text:"First priority is to protect Charlie! Thinking quickly, you grab a stray metal garbage can lid and block the creature, causing it to crash fang first into the metal. It falls to the ground and seems stunned, so you take the opportunity to smash the lid down on its neck. Charlie jumps out of your arms and lunges at its head. You hear an angry crunch and the Basilisk stops moving. Charlie tilts his head and almost looks surprised at the fact that you defended him. He licks your face as you scoop him back up and you can feel his feathery tail beat against your side. Of course lil buddy, you think, anything for you.",
        options: [
            {
                text: "Maybe it was a bad idea to bring Charlie. Maybe go back and drop him at the apartment?",
                nextText:39,
            },
            {
                text:"That was scary! Well, back on route to the pet store! ",
                nextText:41,
            }
        ]
    },
    {
        id:42,
        text:"You and Charlie roll into the pet store and the first thing you do is grab him a new leash and harness so you can put him on the floor and do a little shopping of his own. From aisle to aisle you go, occasionally Charlie grabs a toy or treat and brings it to you. You can't resist those puppy dog eyes and say yes to everything and Charlie seems to approve. As you approach the counter the woman behind the counter looks at you horrified. She croaks out “Ma’am I don't think you know what that is.” ",
        options: [
            {
                text:"What? Charlies your dog, always has been always will be you don't listen to her nonsense and switch to self check out.",
                nextText:43,
            },
            {
                text:"Well, it doesn't hurt to hear her out…",
                nextText:47,
            }
        ]
    },
    {
        id:43,
        text:"You roll your eyes and brush her off. Really? You think my tiny weiner dog is some kind of demon? You check out with Charlies haul and walk back home. When you get there you check your messages. Wellll you've been fired for not showing up for the meeting you scheduled. That is…a bummer. You look over at Charlie and give his lil head a scratch. Thinking some way you'll be fine as long as you stick by charlie. He tilts his head and then scurries off just to return with a page of the news paper. It's the…bounty page for troublesome demons, dragons and fae folk? One of the top listings is that Basilesk you took out earlier and the bounty is…freaking jeepers like half what you made last year at your office job. You decide to go back to the alley to hopefully grab the evidence you need to collect and as you do so it occurs to you….you and Charlie made a pretty good team doing that and a lot of the things on that bounty page seem much easier to take out. Seems like you and your good man have a future taking out troublesome monsters and living the high life doing it.",
        options: [
            {
                text:"Dachshund and pal bounty hunting YAS! This is definitely the coolest ending but I guess maybe you want to try for some of the others?",
                nextText:1,
            }
        ]
    },
    {
        id:44,
        text:"You point blank *will not* take that coin, no way no how. You know an ancient curse when you see one. Even as you shake your head no and push her hand away, the Well Womans clicking screams become louder and louder, still you resist. Finally, the Well Woman grabs you and pulls you faster than would seem possible back. Flying down the halls before you realize it she is bringing you into the Well. You grab on frantically to the wooden post of the well, but no, she's far too strong and down you go into the dank well.",
        options: [
            {
                text:"Ew. It's so musty down there.",
                nextText:45,

            }
        ]
    },
    {
        id:45,
        text:"You wonder down there for ages, for what seems like years, in the dank and the dirt. Logically, you know you should have died of the intense hunger and first a long time ago but for some reason you can continue on. After wandering down countless passages and tunnels, eventually you see an area where the passage seems to go up and has a….odd red glow at the end. As you work your way up the passage gets steeper and steeper but you climb none the less towards the red light. And, just as you are about to reach it, something (maybe a cured dog bone?) comes flying out of nowhere and hits you in the head, knocking you back down to the lowest point in the passage.",
        options: [
            {
                text:"Lesson learned, be nice to Well Women. Try again?",
                nextText:1,
            }

        ]
        
    },
    {
        id:46,
        text:"You decide the coin will give you a cool, devil may care vide as you do your presentation. You go in, survey everyone in the meeting and give the coin a practiced flip and….and…. You watch as the drone who scheduled this meeting walks up the podium. You don't really care what they have to say, you've looked over their materials well enough to see it's a good idea that you are completely going to use, the only factor in all of this is if this particular drone has the chops to handle the project. They look a little….taken aback, confused? You feel like you've seen enough. You say you have something important to take care of while meaningfully patting your briefcase and say you don't have time for this anymore. You grab a danish on the way out as you decide if you're going to take a nap in your office or take the rest of the day off to go hit a few rounds down at the club. ",
        options: [
            {
                text:"Wow, wait, are you the boss now? Am I just hanging with McGuffin now? I'm a little confused. Maybe we did it wrong? Better try again.",
                nextText:1,
            }
        ]
    },
    {
        id:47,
        text:"You hear her out and….wow that's a lot. Demons can really rewrite memories like that? Still, this is kind of overwhelming. Are you just going to trust some random clerk? You leave the store without buying anything and decide to drop Charlie off at the apartment and go for a drive to clear your head. ",
        options: [
            {
                text:"Some time apart and distance might make it clearer what's really going on right?",
                nextText:39,
            }
        ]
    },

]

startGame()