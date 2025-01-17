const sdata=require('../data.json');
const {BST}=require('../BST/bst.js')
const bst = new BST();
const loadStudents=()=>{
    sdata.forEach(student=>{
        bst.insert(student.id,student);
    })
}

// const addStudent=(st)=>{
//     bst.insert(id)
// }

const getSortedST=()=>{
    const students=[...sdata]
    students.sort((a,b)=>b.score-a.score)
    var rank=1
    for(student of students) student.rank=rank++;
    return students
}

const searchStudent=(id)=>{
    root=bst.search(id);
    if(root)
    return {
        name: root.data.name,
        id: root.id,
        score: root.data.score
    }
    return null;
}

const addStudent=(st)=>{
    bst.insert(st.id,st);
    sdata.push(st)
}

const getList=()=>{
    return bst.traverse();
}
// loadStudents();
// console.log(getSortedST())

module.exports={
    loadStudents,getSortedST,searchStudent,getList,addStudent
}