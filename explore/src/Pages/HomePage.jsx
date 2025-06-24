import React from 'react';
import PostCard from '../components/Postcard';
import JobListing from '../components/JobListing';
import ProjectCard from '../components/ProjectCard';

const HomePage = () => {
  const posts = [
    {
      id: 1,
      author: "Krish",
      verified: true,
      avatar: "https://th.bing.com/th/id/OIP.fSHrEu7zB1Pqxgc2vzeL8QAAAA?rs=1&pid=ImgDetMain",
      content: "The global leading of IT services , improve branding",
      link: "https://thisux.com",
      image: "",
      comments: 5,
      reposts: 4,
      likes: 21,
      showReply: true
    },
    {
      id: 2,
      author: "Maxi",
      verified: true,
      avatar: "https://th.bing.com/th/id/OIP.fSHrEu7zB1Pqxgc2vzeL8QAAAA?rs=1&pid=ImgDetMain",
      content: "Headers Club Browse the hottest header images on the internet.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      tags: ["side-projects"],
      showReply: true
    },
    {
      id: 3,
      author: "Pedro",
      verified: true,
      avatar: "https://th.bing.com/th/id/OIP.fSHrEu7zB1Pqxgc2vzeL8QAAAA?rs=1&pid=ImgDetMain",
      content: "It's February which means we are officially...",
      image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400&h=300&fit=crop",
      showReply: true
    },
    {
      id: 4,
      author: "Kicha",
      title: "Evil Eyes",
      description: "Taper",
      avatar: "https://th.bing.com/th/id/OIP.fSHrEu7zB1Pqxgc2vzeL8QAAAA?rs=1&pid=ImgDetMain",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
      tags: ["projects"],
      company: "Teanis"
    }
  ];

  const jobs = [
    { company: "Squid", title: "Backend and Data Engineer" },
    { company: "Ontop", title: "Founding Product Designer" },
    { company: "play.ai", title: "Product Designer" },
    { company: "plot.ai", title: "Frontend Product (UI) Engineer" },
    { company: "BRM", title: "Senior Product Designer" },
    { company: "Raft.ai", title: "Staff Product Designer" },
    { company: "Umbrel", title: "Frontend Design Engineer" },
    { company: "Perdiem", title: "Senior iOS Engineer" },
    { company: "Pixel-f", title: "Freelance senior product designer" },
    { company: "Limbic", title: "Marketing designer" },
    { company: "Alembic", title: "UI/UX designer" },
    { company: "plot.ai", title: "Frontend Product (UI) Engineer" },
    { company: "BRM", title: "Senior Product Designer" },
    { company: "Raft.ai", title: "Staff Product Designer" },
    { company: "Umbrel", title: "Frontend Design Engineer" },
    { company: "Perdiem", title: "Senior iOS Engineer" }
  ];

  const projects = [
    {
      id: 1,
      author: "Kicha",
      title: "Evil Eyes",
      description: "Taper",
      avatar: "https://th.bing.com/th/id/OIP.fSHrEu7zB1Pqxgc2vzeL8QAAAA?rs=1&pid=ImgDetMain",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
      tags: ["projects"],
      company: "Teanis"
    },
    {
      id: 2,
      author: "Designer",
      avatar: "https://th.bing.com/th/id/OIP.fSHrEu7zB1Pqxgc2vzeL8QAAAA?rs=1&pid=ImgDetMain",
      content: "",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
      showReply: false
    },
    {
      id: 3,
      author: "Mike",
      title: "E-commerce Dashboard",
      description: "Modern analytics dashboard for online stores",
      avatar: "https://th.bing.com/th/id/OIP.fSHrEu7zB1Pqxgc2vzeL8QAAAA?rs=1&pid=ImgDetMain",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      tags: ["dashboard", "analytics"],
      company: "ShopFlow"
    },
    {
      id: 4,
      author: "Lisa",
      title: "Mobile Banking App",
      description: "Secure and intuitive banking experience",
      avatar: "https://th.bing.com/th/id/OIP.fSHrEu7zB1Pqxgc2vzeL8QAAAA?rs=1&pid=ImgDetMain",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=200&fit=crop",
      tags: ["mobile", "fintech"],
      company: "FinanceApp"
    }
  ];

  const moreProjects = [
    {
      id: 3,
      author: "Mike",
      title: "E-commerce Dashboard",
      description: "Modern analytics dashboard for online stores",
      avatar: "https://th.bing.com/th/id/OIP.fSHrEu7zB1Pqxgc2vzeL8QAAAA?rs=1&pid=ImgDetMain",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      tags: ["dashboard", "analytics"],
      company: "ShopFlow"
    },
    {
      id: 4,
      author: "Lisa",
      title: "Mobile Banking App",
      description: "Secure and intuitive banking experience",
      avatar: "https://th.bing.com/th/id/OIP.fSHrEu7zB1Pqxgc2vzeL8QAAAA?rs=1&pid=ImgDetMain",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=200&fit=crop",
      tags: ["mobile", "fintech"],
      company: "FinanceApp"
    },
    {
      id: 5,
      author: "Davi",
      title: "AI Chat Interface",
      description: "Conversational AI with modern UI",
      avatar: "https://th.bing.com/th/id/OIP.fSHrEu7zB1Pqxgc2vzeL8QAAAA?rs=1&pid=ImgDetMain",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
      tags: ["ai", "chat"],
      company: "TechBot"
    },
  ];

  const allContent = [
    ...posts,
    ...projects,
    ...moreProjects
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="block md:hidden">
        <div className="px-4 py-2 space-y-4 bg-white">
          {allContent.map((item, index) => {
            if (item.content !== undefined) {
              return <PostCard key={`post-${item.id}-${index}`} post={item} />;
            } else {
              return <ProjectCard key={`project-${item.id}-${index}`} project={item} />;
            }
          })}
        </div>
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <div className="space-y-4">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg shadow-sm border p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white">Active job listings</h3>
              </div>
              <div className="space-y-3">
                {jobs.slice(0, 17).map((job, index) => (
                  <JobListing key={index} job={job} />
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 hover:text-white-700 font-medium text-sm">
                See all
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="space-y-4">
            {moreProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;