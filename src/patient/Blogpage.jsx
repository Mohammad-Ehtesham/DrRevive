import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FaHeart,
  FaRegHeart,
  FaComment,
  FaUserPlus,
  FaShare,
  FaBookmark,
  FaRegBookmark,
  FaSearch,
} from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { RiStethoscopeLine } from "react-icons/ri";

const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Sample data - in a real app, you'd fetch this from an API
  useEffect(() => {
    const fetchArticles = async () => {
      // Simulate API call
      setTimeout(() => {
        setArticles([
          {
            id: 1,
            title: "5 Signs You Should See a Cardiologist",
            author: {
              id: 101,
              name: "Dr. Sarah Johnson",
              specialty: "Cardiology",
              hospital: "City Heart Center",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            content:
              "Heart disease is the leading cause of death worldwide. Many people ignore early warning signs...",
            fullContent:
              "Heart disease is the leading cause of death worldwide. Many people ignore early warning signs that could indicate serious cardiovascular issues. Here are five key symptoms you should never ignore:\n\n1. Chest pain or discomfort\n2. Shortness of breath\n3. Irregular heartbeat\n4. Swelling in legs/ankles\n5. Extreme fatigue\n\nIf you experience any of these symptoms regularly, schedule an appointment with a cardiologist immediately. Early detection can save lives.",
            category: "cardiology",
            date: "2023-05-15",
            likes: 124,
            isLiked: false,
            isBookmarked: false,
            readTime: "4 min",
          },
          {
            id: 2,
            title: "Managing Diabetes During Pregnancy",
            author: {
              id: 102,
              name: "Dr. Michael Chen",
              specialty: "Endocrinology",
              hospital: "Metropolitan Medical",
              avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            content:
              "Gestational diabetes affects approximately 10% of pregnancies in the US. Proper management is crucial...",
            fullContent:
              "Gestational diabetes affects approximately 10% of pregnancies in the US. Proper management is crucial for both mother and baby's health. Key strategies include:\n\n• Monitoring blood sugar levels regularly\n• Following a balanced diet plan\n• Safe exercise routines\n• Medication when necessary\n\nRegular check-ups with your endocrinologist and obstetrician are essential throughout your pregnancy.",
            category: "endocrinology",
            date: "2023-06-22",
            likes: 89,
            isLiked: false,
            isBookmarked: false,
            readTime: "6 min",
          },
          {
            id: 3,
            title: "Pediatric Vaccination Schedule 2023",
            author: {
              id: 103,
              name: "Dr. Lisa Rodriguez",
              specialty: "Pediatrics",
              hospital: "Children's Wellness Center",
              avatar: "https://randomuser.me/api/portraits/women/63.jpg",
            },
            content:
              "Keeping your child's vaccinations up to date is one of the most important things you can do...",
            fullContent:
              "Keeping your child's vaccinations up to date is one of the most important things you can do to protect them from serious diseases. Here's the recommended schedule for 2023:\n\nBirth: Hepatitis B\n2 months: DTaP, Hib, PCV13, Polio, Rotavirus\n4 months: Same as 2 months\n6 months: Same plus Influenza (yearly)\n12-15 months: MMR, Varicella, Hepatitis A\n\nAlways consult with your pediatrician about any concerns or special circumstances.",
            category: "pediatrics",
            date: "2023-04-10",
            likes: 156,
            isLiked: false,
            isBookmarked: false,
            readTime: "5 min",
          },
          {
            id: 4,
            title: "Understanding Migraine Triggers and Treatments",
            author: {
              id: 104,
              name: "Dr. James Wilson",
              specialty: "Neurology",
              hospital: "NeuroCare Institute",
              avatar: "https://randomuser.me/api/portraits/men/45.jpg",
            },
            content:
              "Migraines affect nearly 1 billion people worldwide. Identifying triggers can help...",
            fullContent:
              "Migraines affect nearly 1 billion people worldwide. Identifying triggers can help reduce frequency and severity. Common triggers include:\n\n1. Stress and anxiety\n2. Hormonal changes\n3. Certain foods and drinks\n4. Sleep disturbances\n5. Environmental factors\n\nNew treatment options including CGRP inhibitors have shown promising results in clinical trials.",
            category: "neurology",
            date: "2023-03-18",
            likes: 78,
            isLiked: false,
            isBookmarked: false,
            readTime: "7 min",
          },
          {
            id: 5,
            title: "Skin Cancer Prevention: What You Need to Know",
            author: {
              id: 105,
              name: "Dr. Emily Park",
              specialty: "Dermatology",
              hospital: "Skin Health Associates",
              avatar: "https://randomuser.me/api/portraits/women/28.jpg",
            },
            content:
              "Skin cancer is one of the most common cancers but also one of the most preventable...",
            fullContent:
              "Skin cancer is one of the most common cancers but also one of the most preventable. Key prevention strategies:\n\n• Regular use of broad-spectrum SPF 30+ sunscreen\n• Avoiding peak sun hours (10am-4pm)\n• Wearing protective clothing\n• Monthly self-exams\n• Annual dermatologist checkups\n\nEarly detection leads to a 99% 5-year survival rate for melanoma caught early.",
            category: "dermatology",
            date: "2023-07-05",
            likes: 112,
            isLiked: false,
            isBookmarked: false,
            readTime: "5 min",
          },
          {
            id: 6,
            title: "The Gut-Brain Connection Explained",
            author: {
              id: 106,
              name: "Dr. Robert Kim",
              specialty: "Gastroenterology",
              hospital: "Digestive Health Center",
              avatar: "https://randomuser.me/api/portraits/men/22.jpg",
            },
            content:
              "Emerging research shows a strong link between gut health and mental well-being...",
            fullContent:
              "Emerging research shows a strong link between gut health and mental well-being. Key findings:\n\n- Gut microbiome produces neurotransmitters like serotonin\n- Inflammation may contribute to depression\n- Probiotics show promise in anxiety reduction\n- Dietary fiber feeds beneficial bacteria\n\nSimple dietary changes can significantly impact both digestive and mental health.",
            category: "gastroenterology",
            date: "2023-02-14",
            likes: 95,
            isLiked: false,
            isBookmarked: false,
            readTime: "8 min",
          },
          {
            id: 7,
            title: "Managing Arthritis Pain: New Approaches",
            author: {
              id: 107,
              name: "Dr. Patricia Lopez",
              specialty: "Rheumatology",
              hospital: "Joint Care Specialists",
              avatar: "https://randomuser.me/api/portraits/women/50.jpg",
            },
            content:
              "Over 50 million adults suffer from arthritis. New treatments can help manage pain...",
            fullContent:
              "Over 50 million adults suffer from arthritis. New treatments can help manage pain and improve mobility:\n\n1. Biologic medications\n2. Physical therapy innovations\n3. Dietary interventions\n4. Low-impact exercise programs\n5. Pain management techniques\n\nEarly intervention can slow disease progression in many cases.",
            category: "rheumatology",
            date: "2023-01-30",
            likes: 87,
            isLiked: false,
            isBookmarked: false,
            readTime: "6 min",
          },
          {
            id: 8,
            title: "Sleep Disorders: When to Seek Help",
            author: {
              id: 108,
              name: "Dr. David Miller",
              specialty: "Sleep Medicine",
              hospital: "Sleep Wellness Center",
              avatar: "https://randomuser.me/api/portraits/men/38.jpg",
            },
            content:
              "Nearly 70 million Americans suffer from sleep disorders. Proper diagnosis is key...",
            fullContent:
              "Nearly 70 million Americans suffer from sleep disorders. Proper diagnosis is key to effective treatment:\n\n• Common sleep disorders:\n  - Insomnia\n  - Sleep apnea\n  - Restless leg syndrome\n  - Narcolepsy\n\n• Warning signs:\n  - Daytime fatigue\n  - Loud snoring\n  - Difficulty falling/staying asleep\n\nSleep studies can accurately diagnose most disorders.",
            category: "sleep-medicine",
            date: "2023-08-12",
            likes: 76,
            isLiked: false,
            isBookmarked: false,
            readTime: "7 min",
          },
          {
            id: 9,
            title: "Preventing Sports Injuries in Athletes",
            author: {
              id: 109,
              name: "Dr. Amanda Chen",
              specialty: "Sports Medicine",
              hospital: "Peak Performance Clinic",
              avatar: "https://randomuser.me/api/portraits/women/35.jpg",
            },
            content:
              "Athletes of all levels can benefit from proper injury prevention techniques...",
            fullContent:
              "Athletes of all levels can benefit from proper injury prevention techniques:\n\n1. Proper warm-up and cool-down routines\n2. Strength training for injury-prone areas\n3. Technique refinement\n4. Adequate recovery time\n5. Nutrition for tissue health\n6. Hydration strategies\n\nPrehabilitation reduces injury risk by up to 50% in clinical studies.",
            category: "sports-medicine",
            date: "2023-09-05",
            likes: 104,
            isLiked: false,
            isBookmarked: false,
            readTime: "5 min",
          },
          {
            id: 10,
            title: "Mental Health First Aid Basics",
            author: {
              id: 110,
              name: "Dr. Thomas Wright",
              specialty: "Psychiatry",
              hospital: "Mindful Living Center",
              avatar: "https://randomuser.me/api/portraits/men/55.jpg",
            },
            content:
              "Recognizing mental health crises is as important as physical first aid...",
            fullContent:
              "Recognizing mental health crises is as important as physical first aid. Essential skills:\n\n1. Recognizing warning signs of:\n   - Depression\n   - Anxiety disorders\n   - Suicidal ideation\n   - Psychotic episodes\n\n2. Appropriate response strategies\n3. De-escalation techniques\n4. When to seek emergency help\n5. Resources for ongoing support\n\nMental health literacy saves lives.",
            category: "psychiatry",
            date: "2023-04-28",
            likes: 132,
            isLiked: false,
            isBookmarked: false,
            readTime: "9 min",
          },
          {
            id: 11,
            title: "The Truth About Intermittent Fasting",
            author: {
              id: 111,
              name: "Dr. Rachel Green",
              specialty: "Nutrition",
              hospital: "Metabolic Health Institute",
              avatar: "https://randomuser.me/api/portraits/women/42.jpg",
            },
            content:
              "Intermittent fasting has gained popularity, but does the science support the hype?...",
            fullContent:
              "Intermittent fasting has gained popularity, but does the science support the hype?\n\nExamining:\n• Different fasting protocols (16:8, 5:2, etc.)\n• Proven benefits for:\n  - Weight management\n  - Insulin sensitivity\n  - Cellular autophagy\n• Potential risks for:\n  - Women's hormones\n  - Those with eating disorders\n  - Certain medical conditions\n\nEvidence-based recommendations for safe practice.",
            category: "nutrition",
            date: "2023-10-15",
            likes: 98,
            isLiked: false,
            isBookmarked: false,
            readTime: "8 min",
          },
          {
            id: 12,
            title: "Managing Asthma in Children",
            author: {
              id: 112,
              name: "Dr. Mark Taylor",
              specialty: "Pediatric Pulmonology",
              hospital: "Children's Respiratory Center",
              avatar: "https://randomuser.me/api/portraits/men/47.jpg",
            },
            content:
              "Childhood asthma rates continue to rise. Modern management can ensure active lives...",
            fullContent:
              "Childhood asthma rates continue to rise. Modern management can ensure active lives:\n\n• Recognizing symptoms beyond wheezing\n• New inhaler technologies\n• Action plans for schools\n• Environmental trigger management\n• Biologic medications for severe cases\n\nWith proper treatment, most children can participate fully in activities.",
            category: "pediatrics",
            date: "2023-11-02",
            likes: 84,
            isLiked: false,
            isBookmarked: false,
            readTime: "6 min",
          },
          {
            id: 13,
            title: "Eye Health in the Digital Age",
            author: {
              id: 113,
              name: "Dr. Susan Lee",
              specialty: "Ophthalmology",
              hospital: "Vision Care Associates",
              avatar: "https://randomuser.me/api/portraits/women/39.jpg",
            },
            content:
              "Digital eye strain affects 60% of adults. Protect your vision with these tips...",
            fullContent:
              "Digital eye strain affects 60% of adults. Protect your vision with these tips:\n\n1. The 20-20-20 rule (every 20 minutes, look 20 feet away for 20 seconds)\n2. Optimal screen brightness and positioning\n3. Blue light filter effectiveness\n4. Importance of regular eye exams\n5. Dry eye prevention strategies\n\nSpecial considerations for contact lens wearers and post-LASIK patients.",
            category: "ophthalmology",
            date: "2023-09-20",
            likes: 107,
            isLiked: false,
            isBookmarked: false,
            readTime: "5 min",
          },
        ]);

        // Initialize comments
        setComments({
          1: [
            {
              id: 1,
              user: "John D.",
              text: "This article saved my life! I went to see a cardiologist after reading this and discovered I had a blockage.",
              date: "2023-05-16",
            },
            {
              id: 2,
              user: "Mary S.",
              text: "How often should someone with no symptoms get checked?",
              date: "2023-05-18",
            },
          ],
          2: [
            {
              id: 1,
              user: "Emma T.",
              text: "Thank you for this helpful guide! I'm 24 weeks pregnant and was just diagnosed.",
              date: "2023-06-23",
            },
          ],
          3: [],
        });

        setIsLoading(false);
      }, 1000);
    };

    fetchArticles();
  }, []);

  const handleLike = (articleId) => {
    setArticles(
      articles.map((article) => {
        if (article.id === articleId) {
          return {
            ...article,
            likes: article.isLiked ? article.likes - 1 : article.likes + 1,
            isLiked: !article.isLiked,
          };
        }
        return article;
      })
    );
  };

  const handleBookmark = (articleId) => {
    setArticles(
      articles.map((article) => {
        if (article.id === articleId) {
          return {
            ...article,
            isBookmarked: !article.isBookmarked,
          };
        }
        return article;
      })
    );
  };

  const handleCommentSubmit = (articleId) => {
    if (newComment.trim() === "") return;

    const newCommentObj = {
      id: Date.now(),
      user: "Current User", // In real app, use logged in user's name
      text: newComment,
      date: new Date().toISOString().split("T")[0],
    };

    setComments({
      ...comments,
      [articleId]: [...(comments[articleId] || []), newCommentObj],
    });

    setNewComment("");
  };

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || article.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    return <LoadingContainer>Loading articles...</LoadingContainer>;
  }

  return (
    <BlogContainer>
      <BlogHeader>
        <h1>Medical Insights & Health Tips</h1>
        <p>Expert advice from our network of healthcare professionals</p>
      </BlogHeader>

      <BlogControls>
        <SearchBox>
          <FaSearch
            style={{
              background: "transparent",
              color: "grey",
              padding: "0.5rem",
              borderRadius: "0",
            }}
            size={40}
          />
          <input
            type="text"
            placeholder="Search articles or doctors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBox>

        <CategoryFilter>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="cardiology">Cardiology</option>
            <option value="endocrinology">Endocrinology</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="neurology">Neurology</option>
            <option value="dermatology">Dermatology</option>
          </select>
        </CategoryFilter>
      </BlogControls>

      {selectedArticle ? (
        <ArticleDetail>
          <BackButton onClick={() => setSelectedArticle(null)}>
            ← Back to Articles
          </BackButton>

          <ArticleHeader>
            <h2>{selectedArticle.title}</h2>
            <ArticleMeta>
              <AuthorInfo>
                <AuthorAvatar
                  src={selectedArticle.author.avatar}
                  alt={selectedArticle.author.name}
                />
                <div>
                  <AuthorName>{selectedArticle.author.name}</AuthorName>
                  <AuthorSpecialty>
                    <RiStethoscopeLine
                      style={{
                        background: "transparent",
                        color: "grey",
                        padding: "0.5rem",
                        borderRadius: "0",
                      }}
                      size={40}
                    />{" "}
                    {selectedArticle.author.specialty} •{" "}
                    {selectedArticle.author.hospital}
                  </AuthorSpecialty>
                </div>
              </AuthorInfo>
              <ArticleStats>
                <span>
                  <IoMdTime
                    style={{
                      background: "transparent",
                      color: "grey",
                      padding: "0.5rem",
                      borderRadius: "0",
                    }}
                    size={40}
                  />{" "}
                  {selectedArticle.readTime} read
                </span>
                <span>
                  {new Date(selectedArticle.date).toLocaleDateString()}
                </span>
              </ArticleStats>
            </ArticleMeta>
          </ArticleHeader>

          <ArticleContent>
            {selectedArticle.fullContent.split("\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </ArticleContent>

          <ArticleActions>
            <ActionButton onClick={() => handleLike(selectedArticle.id)}>
              {selectedArticle.isLiked ? (
                <FaHeart color="red" />
              ) : (
                <FaRegHeart />
              )}
              <span>{selectedArticle.likes} Likes</span>
            </ActionButton>

            <ActionButton onClick={() => handleBookmark(selectedArticle.id)}>
              {selectedArticle.isBookmarked ? (
                <FaBookmark color="#1e88e5" />
              ) : (
                <FaRegBookmark />
              )}
              <span>Bookmark</span>
            </ActionButton>

            <ActionButton>
              <FaShare />
              <span>Share</span>
            </ActionButton>

            <ConnectButton>
              <FaUserPlus />
              <span>
                Connect with Dr. {selectedArticle.author.name.split(" ")[1]}
              </span>
            </ConnectButton>
          </ArticleActions>

          <CommentsSection>
            <h3>Comments ({comments[selectedArticle.id]?.length || 0})</h3>

            <CommentForm>
              <textarea
                placeholder="Share your thoughts..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <SubmitButton
                onClick={() => handleCommentSubmit(selectedArticle.id)}
              >
                Post Comment
              </SubmitButton>
            </CommentForm>

            <CommentsList>
              {comments[selectedArticle.id]?.map((comment) => (
                <Comment key={comment.id}>
                  <CommentHeader>
                    <CommentAuthor>{comment.user}</CommentAuthor>
                    <CommentDate>{comment.date}</CommentDate>
                  </CommentHeader>
                  <CommentText>{comment.text}</CommentText>
                </Comment>
              ))}

              {(!comments[selectedArticle.id] ||
                comments[selectedArticle.id].length === 0) && (
                <NoComments>
                  No comments yet. Be the first to share your thoughts!
                </NoComments>
              )}
            </CommentsList>
          </CommentsSection>
        </ArticleDetail>
      ) : (
        <ArticlesGrid>
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              onClick={() => setSelectedArticle(article)}
            >
              <ArticleImage>
                <img
                  src={`https://source.unsplash.com/random/300x200/?${article.category}`}
                  alt={article.title}
                />
                <CategoryTag>{article.category}</CategoryTag>
              </ArticleImage>

              <ArticlePreview>
                <h3>{article.title}</h3>
                <p>{article.content.substring(0, 100)}...</p>

                <ArticleFooter>
                  <AuthorPreview>
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                    />
                    <span>{article.author.name}</span>
                  </AuthorPreview>

                  <ArticleStats>
                    <span>
                      <FaHeart color={article.isLiked ? "red" : "#ccc"} />{" "}
                      {article.likes}
                    </span>
                    <span>
                      <FaComment /> {comments[article.id]?.length || 0}
                    </span>
                    <span>
                      <IoMdTime /> {article.readTime}
                    </span>
                  </ArticleStats>
                </ArticleFooter>
              </ArticlePreview>
            </ArticleCard>
          ))}

          {filteredArticles.length === 0 && (
            <NoResults>
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </NoResults>
          )}
        </ArticlesGrid>
      )}
    </BlogContainer>
  );
};

// Styled Components
const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #666;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    color: #1e88e5;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

const BlogControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  max-width: 500px;

  input {
    border: none;
    background: transparent;
    padding: 0.5rem;
    width: 100%;
    font-size: 1rem;
    outline: none;
  }

  svg {
    color: #64748b;
    margin-right: 0.5rem;
  }
`;

const CategoryFilter = styled.div`
  select {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 1px solid #ddd;
    background: white;
    font-size: 1rem;
    cursor: pointer;
  }
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const ArticleCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ArticleImage = styled.div`
  position: relative;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CategoryTag = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #1e88e5;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  text-transform: capitalize;
`;

const ArticlePreview = styled.div`
  padding: 1.5rem;

  h3 {
    margin: 0 0 1rem 0;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }
`;

const ArticleFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AuthorPreview = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    font-size: 0.9rem;
    color: #333;
  }
`;

const ArticleStats = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  color: #666;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

const NoResults = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 2rem;

  h3 {
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
  }
`;

const ArticleDetail = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #1e88e5;
  cursor: pointer;
  padding: 0;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const ArticleHeader = styled.div`
  margin-bottom: 2rem;

  h2 {
    color: #333;
    margin-bottom: 1.5rem;
  }
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.div`
  font-weight: 600;
  color: #333;
`;

const AuthorSpecialty = styled.div`
  font-size: 0.9rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

// const ArticleStats = styled.div`
//   display: flex;
//   gap: 1rem;
//   font-size: 0.9rem;
//   color: #666;

//   span {
//     display: flex;
//     align-items: center;
//     gap: 0.25rem;
//   }
// `;

const ArticleContent = styled.div`
  line-height: 1.8;
  color: #444;
  margin-bottom: 2rem;

  p {
    margin-bottom: 1.5rem;
  }
`;

const ArticleActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f5f5f5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #e0e0e0;
  }
`;

const ConnectButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #1e88e5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #1565c0;
  }
`;

const CommentsSection = styled.div`
  h3 {
    margin-bottom: 1.5rem;
    color: #333;
  }
`;

const CommentForm = styled.div`
  margin-bottom: 2rem;

  textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    min-height: 100px;
    margin-bottom: 1rem;
    font-family: inherit;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #1e88e5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: #1565c0;
  }
`;

const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Comment = styled.div`
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const CommentAuthor = styled.div`
  font-weight: 600;
  color: #333;
`;

const CommentDate = styled.div`
  font-size: 0.8rem;
  color: #666;
`;

const CommentText = styled.div`
  color: #444;
  line-height: 1.6;
`;

const NoComments = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`;

export default BlogPage;
