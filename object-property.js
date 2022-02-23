const students = [
    {id: 32, name:'faruk hassen'},
    {id: 12, name: 'gopal '},
    {id: 24, name:'dalim'}
]

const names= students.map(s=>s.name);
const ids= students.map(s=>s.id);
const student= students.filter(s=>s.id>20);
const finds= students.find(s=>s.id>20);
console.log(finds);