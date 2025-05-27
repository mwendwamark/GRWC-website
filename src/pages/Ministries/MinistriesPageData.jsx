import {
  FaMicrophone,
  FaChild,
  FaHandshake,
  FaUserFriends,
  FaBolt,
  FaVolumeUp,
  FaUsers,
  FaHeart,
} from "react-icons/fa";
import img1 from "../../assets/Ministries/choir.jpg";
import img2 from "../../assets/Ministries/sundaySchool.jpg";
import img3 from "../../assets/Ministries/usher.jpg";
import img4 from "../../assets/Ministries/youngster.jpg";
import img5 from "../../assets/Ministries/youth.jpg";
import img6 from "../../assets/Ministries/sound.jpg";
import img7 from "../../assets/Ministries/mens.jpg"; // Add men's ministry image
import img8 from "../../assets/Ministries/womens.jpg"; // Add women's ministry image

export const MinistriesPageData = [
  {
    id: 1,
    title: "Choir (Sounds of Revival)",
    icon: <FaMicrophone style={{color: "var(--purple-color)"}}/>,
    image: img1,
    description:
      "Voices united in divine harmony, our choir breathes life into worship through heavenly melodies and spirit-filled praise. Every note resonates with devotion, ushering the congregation into God's presence.",
    meetingDays: "Tuesdays & Saturdays",
    keyVerse: "Psalm 95:1",
    verseText:
      "Come, let us sing for joy to the LORD; let us shout aloud to the Rock of our salvation.",
  },
  {
    id: 2,
    title: "Sunday School",
    icon: <FaChild style={{color: "#3498db"}}/>,
    image: img2,
    description:
      "Nurturing young seeds of faith in fertile soil of God's word. Through interactive learning, biblical storytelling, and creative activities, we plant eternal truths in receptive hearts that will bloom throughout their lives.",
    meetingDays: "Sundays",
    keyVerse: "Proverbs 22:6",
    verseText:
      "Train up a child in the way he should go, and when he is old he will not depart from it.",
  },
  {
    id: 3,
    title: "Ushering Ministry",
    icon: <FaHandshake style={{color:"brown"}}/>,
    image: img3,
    description:
      "First impressions that reflect heaven's welcome. Our ushers create an atmosphere of divine hospitality, guiding visitors and members alike with warm smiles, attentive service, and hearts ready to assist.",
    meetingDays: "Sundays & Special Events",
    keyVerse: "Psalm 84:10",
    verseText:
      "Better is one day in your courts than a thousand elsewhere; I would rather be a doorkeeper in the house of my God than dwell in the tents of the wicked.",
  },
  {
    id: 4,
    title: "Kasarani Youngsters",
    icon: <FaUserFriends style={{color:"lightgreen"}}/>,
    image: img4,
    description:
      "Teen faith in action! This vibrant community empowers adolescents to navigate life's challenges with biblical wisdom. Through mentorship, engaging activities and peer support, young people discover their God-given identity and purpose.",
    meetingDays: "Fridays & Sundays",
    keyVerse: "1 Timothy 4:12",
    verseText:
      "Don't let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.",
  },
  {
    id: 5,
    title: "Youth Ministry",
    icon: <FaBolt style={{color:"gold"}}/>,
    image: img5,
    description:
      "Passion meets purpose in our dynamic youth community. Young adults ignite their faith journey through authentic fellowship, leadership development, and outreach initiatives that transform both their lives and our community.",
    meetingDays: "Saturdays",
    keyVerse: "Jeremiah 29:11",
    verseText:
      "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
  },
  {
    id: 6,
    title: "Sound Department",
    icon: <FaVolumeUp style={{color:"indigo"}}/>,
    image: img6,
    description:
      "Technical excellence amplifying God's message. Behind the scenes yet central to worship, our sound team masterfully blends technology and spirituality to ensure every word and note reaches hearts with crystal clarity.",
    meetingDays: "Sundays & Special Events",
    keyVerse: "Psalm 150:5",
    verseText:
      "Praise him with the clash of cymbals, praise him with resounding cymbals.",
  },
  {
    id: 7,
    title: "Men's Ministry (Kingdom Warriors)",
    icon: <FaUsers style={{color: "#2c3e50"}}/>,
    image: img7,
    description:
      "Iron sharpening iron in brotherhood and faith. Our men gather to build godly character, strengthen marriages, excel in fatherhood, and lead with integrity. Through accountability, prayer, and fellowship, we forge Kingdom warriors who impact families and communities.",
    meetingDays: "Saturdays",
    keyVerse: "Proverbs 27:17",
    verseText:
      "As iron sharpens iron, so one person sharpens another.",
  },
  {
    id: 8,
    title: "Women's Ministry (Daughters of Zion)",
    icon: <FaHeart style={{color: "#e74c3c"}}/>,
    image: img8,
    description:
      "Celebrating the beauty of godly womanhood in all seasons of life. Our women's ministry creates a safe haven for spiritual growth, mutual support, and purposeful living. Through Bible study, prayer, mentorship, and service, we empower women to flourish in their calling as daughters of the King.",
    meetingDays: "Thursdays",
    keyVerse: "Proverbs 31:30",
    verseText:
      "Charm is deceptive, and beauty is fleeting; but a woman who fears the LORD is to be praised.",
  },
];