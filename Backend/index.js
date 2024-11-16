const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//routes
const authRoutes = require('./routes/auth');
const taskRoutes = require('');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

//connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('connected to database')).catch(err => console.log('DB not connected',err));

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));