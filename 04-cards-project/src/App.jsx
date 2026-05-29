import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobs = [
  {
    tag1: "Part-Time",
    tag2: "Senior Level",
    company: "Amazon",
    postedTime: "5 days ago",
    role: "Senior UI/UX Designer",
    logo: "https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png",
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    tag1: "Full-Time",
    tag2: "Mid Level",
    company: "Google",
    postedTime: "2 days ago",
    role: "Frontend Developer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    salary: "$95/hr",
    location: "Bangalore, India"
  },
  {
    tag1: "Remote",
    tag2: "Senior Level",
    company: "Microsoft",
    postedTime: "1 week ago",
    role: "React Developer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    salary: "$110/hr",
    location: "Remote"
  },
  {
    tag1: "Full-Time",
    tag2: "Entry Level",
    company: "Adobe",
    postedTime: "3 days ago",
    role: "UI Designer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
    salary: "$70/hr",
    location: "Pune, India"
  },
  {
    tag1: "Internship",
    tag2: "Fresher",
    company: "Netflix",
    postedTime: "1 day ago",
    role: "Frontend Intern",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    salary: "$25/hr",
    location: "Hyderabad, India"
  },
  {
    tag1: "Contract",
    tag2: "Senior Level",
    company: "Meta",
    postedTime: "4 days ago",
    role: "Product Designer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    salary: "$130/hr",
    location: "Delhi, India"
  },
  {
    tag1: "Remote",
    tag2: "Mid Level",
    company: "Spotify",
    postedTime: "6 days ago",
    role: "UX Researcher",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    salary: "$85/hr",
    location: "Remote"
  },
  {
    tag1: "Full-Time",
    tag2: "Senior Level",
    company: "Apple",
    postedTime: "2 weeks ago",
    role: "Interaction Designer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    salary: "$140/hr",
    location: "Chennai, India"
  },
  {
    tag1: "Part-Time",
    tag2: "Entry Level",
    company: "Airbnb",
    postedTime: "3 hours ago",
    role: "Junior UI Designer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    salary: "$50/hr",
    location: "Jaipur, India"
  },
  {
    tag1: "Full-Time",
    tag2: "Mid Level",
    company: "Uber",
    postedTime: "8 days ago",
    role: "Product Designer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    salary: "$100/hr",
    location: "Gurgaon, India"
  }
];

  return (
    <div className='parent'>
      {jobs.map(function(job, idx) {
        return (
          <div key={idx}>
            <Card
              tag1={job.tag1}
              tag2={job.tag2}
              company={job.company}
              postedTime={job.postedTime}
              role={job.role}
              logo={job.logo}
              salary={job.salary}
              location={job.location}
            />
          </div>
        )
      })}
    </div>
  )
}

export default App
