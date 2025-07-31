# 🌐 BlogSphere

**Your Personal Space to Share Stories, Ideas, and Connect with Fellow Writers**

BlogSphere is a modern, full-stack blogging platform built with the MERN stack (MongoDB, Express.js, React, Node.js). It features a beautiful, responsive design and provides a complete blogging experience with user authentication, post management, and a sleek user interface.

![BlogSphere Banner](https://via.placeholder.com/1200x400/6366f1/ffffff?text=BlogSphere+-+Share+Your+Story)

## ✨ Features

### 🎨 **Modern UI/UX**
- **Beautiful Design**: Professional gradient-based design with glassmorphism effects
- **Responsive Layout**: Fully responsive across desktop, tablet, and mobile devices
- **Dark Theme**: Elegant color scheme with modern typography (Inter font)
- **Smooth Animations**: Hover effects, transitions, and micro-interactions

### 🔐 **Authentication System**
- **User Registration**: Secure user account creation
- **Login/Logout**: JWT-based authentication
- **Protected Routes**: Dashboard and create post pages require authentication
- **User Profiles**: Personalized user experience

### 📝 **Blog Management**
- **Create Posts**: Rich text editor for writing blog posts
- **View Posts**: Beautiful post cards with author information and timestamps
- **Manage Posts**: Personal dashboard to view and manage your posts
- **Delete Posts**: Remove posts with confirmation dialogs

### 🚀 **Technical Features**
- **RESTful API**: Well-structured backend API
- **MongoDB Integration**: Cloud-based database storage
- **Error Handling**: Graceful error handling with user-friendly messages
- **Loading States**: Professional loading indicators
- **Form Validation**: Client-side and server-side validation

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **React Router Dom** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Custom styling with CSS variables
- **Modern JavaScript (ES6+)**

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
BlogSphere/
├── client/                 # React frontend
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── ...
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── RegisterPage.js
│   │   │   ├── DashboardPage.js
│   │   │   └── CreatePostPage.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server/                 # Node.js backend
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── postController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Post.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── posts.js
│   ├── server.js
│   ├── .env
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB Atlas account** (or local MongoDB installation)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayushsharawat/BlogSphere.git
   cd BlogSphere
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the `server` directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5001
   ```

5. **Start the application**
   
   **Terminal 1 - Start the server:**
   ```bash
   cd server
   npm run dev
   ```
   
   **Terminal 2 - Start the client:**
   ```bash
   cd client
   npm start
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5001

## 🎯 Usage

### For Users
1. **Visit the Homepage**: Browse existing blog posts
2. **Register**: Create a new account
3. **Login**: Access your personal dashboard
4. **Create Posts**: Write and publish your stories
5. **Manage Content**: View and manage your published posts

### For Developers
1. **API Endpoints**: RESTful API for all operations
2. **Authentication**: JWT-based auth system
3. **Database**: MongoDB with Mongoose ODM
4. **Frontend**: Modern React with hooks and context

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/myposts` - Get user's posts (protected)
- `POST /api/posts` - Create new post (protected)
- `DELETE /api/posts/:id` - Delete post (protected)

## 🎨 Design Features

- **Color Scheme**: Professional purple/blue gradient theme
- **Typography**: Inter font for modern readability
- **Layout**: Card-based design with shadows and hover effects
- **Icons**: Emoji-based icons for friendly user experience
- **Responsive**: Mobile-first design approach

## 🔧 Configuration

### MongoDB Setup
1. Create a MongoDB Atlas account
2. Set up a new cluster
3. Get your connection string
4. Add your IP to the whitelist
5. Update the `MONGO_URI` in your `.env` file

### JWT Configuration
- Generate a strong JWT secret
- Add it to your `.env` file as `JWT_SECRET`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ayush Sharawat**
- GitHub: [@ayushsharawat](https://github.com/ayushsharawat)
- LinkedIn: [Your LinkedIn Profile]

## 🙏 Acknowledgments

- Thanks to the React and Node.js communities
- Inspired by modern blogging platforms
- Built with love for the developer community

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact me directly.

---

**Made with ❤️ by Ayush Sharawat**

*Happy Blogging! 🚀*
