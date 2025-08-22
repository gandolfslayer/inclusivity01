import React, { useState } from 'react';
import { Plus, Calendar, BarChart3, Users, Heart, MessageCircle, Share, ExternalLink, Clock, Eye } from 'lucide-react';

const SocialMedia: React.FC = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const socialStats = [
    { platform: 'Facebook', followers: '12.4K', engagement: '4.2%', posts: 23, color: 'bg-blue-500' },
    { platform: 'Instagram', followers: '8.9K', engagement: '6.8%', posts: 31, color: 'bg-pink-500' },
    { platform: 'Twitter', followers: '15.2K', engagement: '3.1%', posts: 45, color: 'bg-blue-400' },
    { platform: 'LinkedIn', followers: '5.7K', engagement: '5.4%', posts: 18, color: 'bg-blue-600' }
  ];

  const scheduledPosts = [
    {
      id: 1,
      platform: 'Instagram',
      content: 'Check out our latest product features! 🚀 #innovation #tech',
      scheduledFor: '2024-01-16 10:00 AM',
      status: 'Scheduled',
      image: true
    },
    {
      id: 2,
      platform: 'Facebook',
      content: 'Join us for our upcoming webinar on digital marketing trends...',
      scheduledFor: '2024-01-16 2:00 PM',
      status: 'Scheduled',
      image: false
    },
    {
      id: 3,
      platform: 'Twitter',
      content: 'Quick tip: Always A/B test your email subject lines for better open rates!',
      scheduledFor: '2024-01-17 9:30 AM',
      status: 'Scheduled',
      image: false
    },
    {
      id: 4,
      platform: 'LinkedIn',
      content: 'Thought leadership: The future of B2B marketing automation...',
      scheduledFor: '2024-01-17 11:00 AM',
      status: 'Draft',
      image: false
    }
  ];

  const recentPosts = [
    {
      id: 1,
      platform: 'Instagram',
      content: 'Behind the scenes at our office! Team collaboration at its finest 💪',
      publishedAt: '2024-01-15 3:20 PM',
      likes: 324,
      comments: 45,
      shares: 12,
      engagement: 7.2
    },
    {
      id: 2,
      platform: 'Facebook',
      content: 'Customer success story: How Company X increased their ROI by 340%',
      publishedAt: '2024-01-15 11:00 AM',
      likes: 189,
      comments: 23,
      shares: 34,
      engagement: 5.8
    },
    {
      id: 3,
      platform: 'Twitter',
      content: 'Marketing tip: Personalization increases email click-through rates by up to 41%',
      publishedAt: '2024-01-14 4:15 PM',
      likes: 78,
      comments: 15,
      shares: 28,
      engagement: 4.1
    }
  ];

  const getPlatformIcon = (platform: string) => {
    const icons = {
      'Facebook': '📘',
      'Instagram': '📷',
      'Twitter': '🐦',
      'LinkedIn': '💼'
    };
    return icons[platform as keyof typeof icons] || '📱';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'Scheduled': 'text-blue-700 bg-blue-100',
      'Draft': 'text-gray-700 bg-gray-100',
      'Published': 'text-green-700 bg-green-100'
    };
    return colors[status as keyof typeof colors] || 'text-gray-700 bg-gray-100';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Social Media Management</h1>
          <p className="text-gray-600 mt-1">Manage your social presence, schedule posts, and track engagement</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Content Calendar</span>
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Create Post</span>
          </button>
        </div>
      </div>

      {/* Social Platform Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {socialStats.map((platform) => (
          <div key={platform.platform} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg">{getPlatformIcon(platform.platform)}</span>
                  <h3 className="font-medium text-gray-900">{platform.platform}</h3>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{platform.followers} followers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{platform.engagement} engagement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{platform.posts} posts</span>
                  </div>
                </div>
              </div>
              <div className={`w-3 h-16 ${platform.color} rounded-full`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            {['posts', 'scheduled', 'analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab === 'posts' ? 'Recent Posts' : tab === 'scheduled' ? 'Scheduled Posts' : 'Analytics'}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'posts' && (
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-200 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{getPlatformIcon(post.platform)}</span>
                      <span className="font-medium text-gray-900">{post.platform}</span>
                      <span className="text-sm text-gray-500">{post.publishedAt}</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share className="h-4 w-4" />
                        <span>{post.shares}</span>
                      </div>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      {post.engagement}% engagement
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'scheduled' && (
            <div className="space-y-4">
              {scheduledPosts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{getPlatformIcon(post.platform)}</span>
                      <span className="font-medium text-gray-900">{post.platform}</span>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(post.status)}`}>
                        {post.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{post.scheduledFor}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3">{post.content}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      {post.image && <span>📷 Image attached</span>}
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
                      <button className="text-red-600 hover:text-red-700 text-sm font-medium">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-3">
                    <Eye className="h-8 w-8 text-blue-600" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">2.4M</div>
                      <div className="text-sm text-gray-600">Total Reach</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <Heart className="h-8 w-8 text-green-600" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">18.7K</div>
                      <div className="text-sm text-gray-600">Total Engagements</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">5.2%</div>
                      <div className="text-sm text-gray-600">Avg Engagement Rate</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-4">Platform Performance Comparison</h4>
                <div className="space-y-4">
                  {socialStats.map((platform, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{getPlatformIcon(platform.platform)}</span>
                        <span className="font-medium text-gray-900">{platform.platform}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-sm text-gray-600">{platform.engagement} engagement</div>
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div 
                            className={`h-2 ${platform.color} rounded-full`}
                            style={{ width: `${parseFloat(platform.engagement) * 10}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;