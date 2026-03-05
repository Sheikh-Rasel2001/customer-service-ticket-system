1. Q: What is JSX, and why is it used?
Ans: JSX হলো javasript এর syntax extension যা React এ HTML এর মত syntax ব্যবহার করে UI তৈরী করতে সাহায্য করে ।  

2. Q: What is the difference between State and Props?
Ans: State হলো component এর ভিতরে তৈরী করা একটি object যা data ধারন করে । এটি যে component এ তৈরী করা হয় তার নিয়ন্ত্রণে থাকে । data পরিবর্তন বা আপডেট করা যায় । 
আর props হলো ফাংশনের argument যা parent থেকে child এ পাঠানো হয় । এটির নিয়ন্ত্রণ নিজের কাছে থাকে না, পরিবর্তন করা যায় না, শুধু ডাটা পাস করা হয় ।

3. Q: What is the useState hook, and how does it work?
Ans: useState hook হলো react hook যা functional component এর ভিতরে থাকা state manage করে পরিবর্তন করতে পারে । এটি initial data মনে রাখতে পারে এবং যখন পরিবর্তনের প্রয়োজন তখন সেটি পরিবর্তন করতে পারে । 
যেমন : 
const [data, setData] = useState(10) --> এখানে initial value is 10 
const handleData = () => {
setData ( data * 5) --> এখানে setData data এর value আপডেট করতেছে 
}
4. Q: How can you share state between components in React?
   Ans: Lifting state up ব্যবহার করবো ।

5. Q: How is event handling done in React?
   Ans: React এ event handling করার জন্য event handler function ব্যবহার করা হয় । event গুলি camelCase এ লিখে JSX ফাংশনে পাঠানো হয় । 
