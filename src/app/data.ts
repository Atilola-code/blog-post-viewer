export interface BlogPost {
  id: number;
  title: string;
  snippet: string;
  content: string;
  image: string;
  category: string;
}

export const categories = [
  "Fitness",
  "Health",
  "Nutrition",
  "Wellness"
];

export const blogPosts: BlogPost[] =[
  {
    id: 1,
    title: "Woman's Guide to Gaining Muscles",
    snippet: "This woman's guide to gaining muscle begins by explaining key principles and sample muscle-building workout.",
    content: "To stimulate muscle growth, or hypertrophy, a stimulus must be placed on the muscle. Some women, in response to a fear of “getting big,” tend to stick with weights that they are comfortable using for a full three sets. However, a greater stimulus must be placed on the muscles to see any real changes. You need to get out of your comfort zone using appropriate load progressions and put greater physiological demands on your muscles. Once you can make this paradigm shift in your mind, you will be able to make substantial progress in both your strength and muscle gains. Generally, it is recommended to increase your load in 5% increments until the weights are heavy enough to complete each set within the goal repetition range. For example, if you currently bench press 10 repetitions using 100 pounds (45 kg), increase to 105 pounds (48 kg) to see if this decreases the number of repetitions you can perform. If you can still complete 10 repetitions on your next set, add another 5 pounds (2.3 kg).",
    image: "/woman-guide.jpg",
    category: "Fitness"
  },
  {
    id: 2,
    title: "How to Make Exercise Regular Habit",
    snippet: "These six steps can help shift your focus so that you approach exercise as a means to a healthier life.",
    content: "When it comes to exercise, focusing on the positive aspects of changing a behavior can make it a more pleasurable experience. The brain rewards pleasurable experiences by increasing levels of the neurotransmitters dopamine and serotonin. Learning how to enjoy the process of exercise could elevate levels of these transmitters so that exercise becomes a positive and rewarding experience. The result is that the more you exercise, the better you will feel, which could lead to long-term behavior change and a healthier life.",
    image: "/regular-habit.jpg",
    category: "Health"

  },
  {
    id: 3,
    title: "Healthy lunch ideas for Ladies ",
    snippet: "One of the keys to packing a healthier lunchbox or making any behavior change is to keep things simple. ",
    content: "To increase the chances of healthy habits sticking around, don’t revamp lunchtime all at once. Replace one lunch box item at a time, week by week, and reevaluate periodically. Slow, consistent change is more successful than abrupt menu alterations. Set a focus for each week and switch up the “healthy” part of the lunch. One week it can be the main item, another the snack and the week after, the beverage.",
    image: "/packing-lunch.jpg",
    category: "Nutrition"
  },
  {
    id: 4,
    title: "Healthy Habit for a Healthy Lifestyle",
    snippet: "Healthy habits and daily routines can reduce stress and help you make better decisions throughout the day.",
    content: "Establishing and maintaining daily routines can be a game changer, as routines provide structure, promote consistency and help embed healthy habits into your daily life. Let’s explore the value of routine and review examples of practical morning and evening routines designed to support a healthier, more balanced lifestyle. ",
    image: "/healthy-heart.jpg",
    category: "Health"
  },
  {
    id: 5,
    title: "Three ways to Supercharge The Body and Mind",
    snippet: "Learn about mindfulness for students, as well as 3 activities kids can do to set themselves up for success.",
    content: "Establish a consistent sleep schedule by going to bed at the same time each night. Create a restful environment by dimming lights, setting a comfortable temperature and practicing relaxation techniques like deep breathing or progressive muscle relaxation. This window might involve reading to kids or unwinding in other ways to signal the body that it's time to sleep. ",
    image: "/supercharge.jpg",
    category: "Wellness"
  },
  {
    id: 6,
    title: "Five benefits of Outdoor Exercise",
    snippet: "Outdoor exercise, also called green exercise, helps improve self-esteem, save money and connect with Mother Nature.",
    content: "It is important to note that a routine is designed to create a predictable structure and assist with efficient decision making, but flexibility is a key component. There will be events that can tilt your day or evening in one direction or another. There's power in honoring the space you're in and moving forward intentionally. It's okay if routines need to be “tweaked” to accommodate shifts you and your family may experience. ",
    image: "/outdoor-exercise.webp",
    category: "Fitness"
  },
  {
    id: 7,
    title: "Resistance Training Workout for Beginners",
    snippet: "Resistance training is a vital component of an overall healthy lifestyle",
    content: "Resistance training, whether it's simple body-weight exercises or workouts using free weights or gym equipment, yields important benefits to one's health, fitness, performance and overall well-being. Here are some important benefits that you might want to consider when contemplating whether to add resistance training to your exercise routine.",
    image: "/resistance-training.webp",
    category: "Fitness"
  },
  {
    id: 8,
    title: "Body Positivity: Finding a Balance",
    snippet: "Find an empowering balance between body weight focus and weight neutrality.",
    content: "The decrease in muscle tissue just mentioned also causes a reduction in resting metabolic rate (how many calories you burn while at rest), which results in an increase in body fat over time. Again, the best way to counter this and keep unwanted weight gain at bay is through resistance training. ",
    image: "/balance.webp",
    category: "Wellness"
  },
  {
    id: 9,
    title: "Strategies to Promote Heart Health",
    snippet: "American Heart Month is a great time to focus on heart health. Consider these strategies to help you move more",
    content: "Embracing healthy habits early in life that thwart risk factors for CVD from ever arising in the first place is undoubtedly your best strategy for avoiding heart disease. Nevertheless, it is reassuring to know that it is never too late to improve your cardiorespiratory fitness with structured exercise and by adopting healthy lifestyle behaviors at any age.",
    image: "/promote-heart.jpg",
    category: "Health"
  },
  {
    id: 10,
    title: "The Truth about Protein",
    snippet: "Protein is an essential macronutrient that contributes to weight maintenance and muscle growth.",
    content: "Adequate protein consumption is essential, whether you're an older adult looking to maintain muscle mass as you age, you are an athlete or regular exerciser looking to build muscle or you have recently started taking weight-loss medications, in which case you've probably heard a lot about the importance of eating more protein.",
    image: "/protein.jpg",
    category: "Nutrition"
  }
];


