use skillhub

-- Create Users table
CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(100),
    Email VARCHAR(255),
    PasswordHash VARCHAR(255),
    ProfileInfo TEXT,
    SkillBucksBalance INT DEFAULT 0,
    DateJoined DATETIME,
    LastLogin DATETIME
);

-- Create Skills table
CREATE TABLE Skills (
    SkillID INT PRIMARY KEY AUTO_INCREMENT,
    SkillName VARCHAR(100),
    Description TEXT,
    Category VARCHAR(100)
);

-- Teachable Skills (Many-to-Many)
CREATE TABLE User_Teachable_Skills (
    UserID INT,
    SkillID INT,
    ProficiencyLevel VARCHAR(50),
    PRIMARY KEY (UserID, SkillID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (SkillID) REFERENCES Skills(SkillID)
);

-- Want to Learn Skills (Many-to-Many)
CREATE TABLE User_Want_To_Learn_Skills (
    UserID INT,
    SkillID INT,
    DesiredProficiencyLevel VARCHAR(50),
    PRIMARY KEY (UserID, SkillID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (SkillID) REFERENCES Skills(SkillID)
);

-- Sessions table
CREATE TABLE Sessions (
    SessionID INT PRIMARY KEY AUTO_INCREMENT,
    TeacherUserID INT,
    LearnerUserID INT,
    SkillID INT,
    RequestDateTime DATETIME,
    ScheduledDateTime DATETIME,
    GoogleMeetLink VARCHAR(255),
    ActualStartTime DATETIME,
    ActualEndTime DATETIME,
    Status VARCHAR(50),
    LearnerConfirmationTimestamp DATETIME,
    SkillBucksExchanged INT,
    FOREIGN KEY (TeacherUserID) REFERENCES Users(UserID),
    FOREIGN KEY (LearnerUserID) REFERENCES Users(UserID),
    FOREIGN KEY (SkillID) REFERENCES Skills(SkillID)
);

-- Quizzes table
CREATE TABLE Quizzes (
    QuizID INT PRIMARY KEY AUTO_INCREMENT,
    SkillID INT,
    Title VARCHAR(255),
    Description TEXT,
    PassingScore INT,
    FOREIGN KEY (SkillID) REFERENCES Skills(SkillID)
);

-- Questions table
CREATE TABLE Questions (
    QuestionID INT PRIMARY KEY AUTO_INCREMENT,
    QuizID INT,
    QuestionText TEXT,
    QuestionType VARCHAR(50),
    FOREIGN KEY (QuizID) REFERENCES Quizzes(QuizID)
);

-- Answer Options table
CREATE TABLE Answer_Options (
    AnswerOptionID INT PRIMARY KEY AUTO_INCREMENT,
    QuestionID INT,
    OptionText TEXT,
    IsCorrect BOOLEAN,
    FOREIGN KEY (QuestionID) REFERENCES Questions(QuestionID)
);

-- User Quiz Attempts
CREATE TABLE User_Quiz_Attempts (
    AttemptID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    QuizID INT,
    Score INT,
    AttemptDateTime DATETIME,
    BadgeEarnedID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (QuizID) REFERENCES Quizzes(QuizID),
    FOREIGN KEY (BadgeEarnedID) REFERENCES Badges(BadgeID)
);

-- Badges table
CREATE TABLE Badges (
    BadgeID INT PRIMARY KEY AUTO_INCREMENT,
    BadgeName VARCHAR(100),
    Description TEXT,
    IconURL VARCHAR(255),
    Criteria TEXT
);

-- User Badges
CREATE TABLE User_Badges (
    UserBadgeID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    BadgeID INT,
    DateEarned DATETIME,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (BadgeID) REFERENCES Badges(BadgeID)
);

-- Blog Posts
CREATE TABLE Blog_Posts (
    PostID INT PRIMARY KEY AUTO_INCREMENT,
    AuthorUserID INT,
    Title VARCHAR(255),
    Content TEXT,
    PublishedDate DATETIME,
    LastModifiedDate DATETIME,
    FOREIGN KEY (AuthorUserID) REFERENCES Users(UserID)
);

-- Disputes table
CREATE TABLE Disputes (
    DisputeID INT PRIMARY KEY AUTO_INCREMENT,
    SessionID INT,
    ReportingUserID INT,
    ReportedUserID INT,
    Reason TEXT,
    Details TEXT,
    Status VARCHAR(50),
    AdminUserID INT,
    DateReported DATETIME,
    DateResolved DATETIME,
    AdminNotes TEXT,
    FOREIGN KEY (SessionID) REFERENCES Sessions(SessionID),
    FOREIGN KEY (ReportingUserID) REFERENCES Users(UserID),
    FOREIGN KEY (ReportedUserID) REFERENCES Users(UserID),
    FOREIGN KEY (AdminUserID) REFERENCES Users(UserID)
);
