import bcrypt from 'bcryptjs';
import {Employee,Admin,Attendance,Leave,Performance} from './models.js';
export async function seed(){
  if(!await Admin.findOne({email:'admin@teampulse.com'})){
    await Admin.create({email:'admin@teampulse.com',password:await bcrypt.hash('Admin@123',10)});
  }
  if(await Employee.countDocuments()===0){
    const rows=[
      ['TP001','Aarav Kumar','aarav@company.com','Engineering','Frontend Developer'],
      ['TP002','Diya Sharma','diya@company.com','Design','UI/UX Designer'],
      ['TP003','Rohan Patel','rohan@company.com','Engineering','Backend Developer'],
      ['TP004','Meera Iyer','meera@company.com','Human Resources','HR Executive'],
      ['TP005','Kabir Singh','kabir@company.com','Marketing','Marketing Analyst'],
      ['TP006','Ananya Das','ananya@company.com','Finance','Accountant'],
      ['TP007','Ishaan Rao','ishaan@company.com','Sales','Sales Associate'],
      ['TP008','Sana Khan','sana@company.com','Engineering','QA Engineer']
    ];
    const emps=await Employee.insertMany(rows.map(([employeeId,name,email,department,role],i)=>({employeeId,name,email,department,role,joiningDate:new Date(2023,i,5)})));
    const today=new Date(); today.setHours(0,0,0,0);
    await Attendance.insertMany(emps.slice(0,6).map((e,i)=>({employee:e._id,date:today,status:i===4?'Absent':'Present',checkIn:'09:0'+i,checkOut:'18:00'})));
    await Leave.create({employee:emps[1]._id,type:'Casual',from:new Date(Date.now()+86400000),to:new Date(Date.now()+2*86400000),reason:'Personal work'});
    await Leave.create({employee:emps[3]._id,type:'Sick',from:new Date(Date.now()+3*86400000),to:new Date(Date.now()+4*86400000),reason:'Medical appointment'});
    await Performance.insertMany(emps.slice(0,5).map((e,i)=>({employee:e._id,period:'Q3 2026',score:[92,86,78,90,82][i],rating:['Excellent','Very Good','Good','Excellent','Very Good'][i],feedback:'Consistent contribution and teamwork.'})));
  }
}
