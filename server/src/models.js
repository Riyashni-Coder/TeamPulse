import mongoose from 'mongoose';
const employeeSchema = new mongoose.Schema({
  employeeId:{type:String,unique:true,required:true}, name:{type:String,required:true},
  email:{type:String,required:true,unique:true}, department:{type:String,default:'General'},
  role:{type:String,default:'Employee'}, phone:String, joiningDate:{type:Date,default:Date.now},
  status:{type:String,enum:['Active','Inactive'],default:'Active'}
},{timestamps:true});
const attendanceSchema = new mongoose.Schema({
  employee:{type:mongoose.Schema.Types.ObjectId,ref:'Employee',required:true},
  date:{type:Date,required:true}, status:{type:String,enum:['Present','Absent','Leave'],default:'Present'},
  checkIn:String, checkOut:String
},{timestamps:true});
attendanceSchema.index({employee:1,date:1},{unique:true});
const leaveSchema = new mongoose.Schema({
  employee:{type:mongoose.Schema.Types.ObjectId,ref:'Employee',required:true},
  type:{type:String,default:'Casual'}, from:{type:Date,required:true}, to:{type:Date,required:true},
  reason:String, status:{type:String,enum:['Pending','Approved','Rejected'],default:'Pending'}
},{timestamps:true});
const performanceSchema = new mongoose.Schema({
  employee:{type:mongoose.Schema.Types.ObjectId,ref:'Employee',required:true},
  period:{type:String,required:true}, score:{type:Number,min:0,max:100,required:true},
  rating:{type:String,default:'Good'}, feedback:String
},{timestamps:true});
const adminSchema = new mongoose.Schema({email:{type:String,unique:true},password:String});
export const Employee=mongoose.model('Employee',employeeSchema);
export const Attendance=mongoose.model('Attendance',attendanceSchema);
export const Leave=mongoose.model('Leave',leaveSchema);
export const Performance=mongoose.model('Performance',performanceSchema);
export const Admin=mongoose.model('Admin',adminSchema);
