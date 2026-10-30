# TeamPulse HR Management

Full-stack HR management starter using React, Node.js, Express and MongoDB.

## Quick start (Windows)
1. Install **Node.js LTS** and **MongoDB Community Server** (or create a MongoDB Atlas database).
2. For local MongoDB, start the MongoDB Windows service. If installed as a service, open Services and start **MongoDB Server**. The default URL is `mongodb://127.0.0.1:27017/teampulse`.
3. Double-click `RUN.bat`. It installs dependencies on the first run and starts the API and React app.
4. Open `http://localhost:5173`.
5. Sign in with:
   - Email: `admin@teampulse.com`
   - Password: `Admin@123`
6. Change the default password before using this beyond a local demo.

## MongoDB Atlas option
Create a free cluster and database user in MongoDB Atlas, allow your IP address in Network Access, copy the Node.js connection string, and paste it as `MONGODB_URI` in `server/.env`. Then run `RUN.bat` again. Do not share your connection string.

## If you see ECONNREFUSED 127.0.0.1:27017
MongoDB is not running or the local server is not installed. Start the MongoDB service, or configure Atlas in `server/.env`.

## Features
- Admin login (JWT)
- Employee records: create, search, edit, delete
- Attendance: mark present/absent/leave and view records
- Leave requests: create, approve, reject
- Performance tracking: add and review scores
- Dashboard KPIs and department chart
- CSV downloads for employees, attendance, leave and performance

Demo data is seeded automatically on first successful API connection. This is a demo starter, not a production HR/payroll system. Add role-based access, audit logs, backups, HTTPS and stronger deployment secrets before real company use.
