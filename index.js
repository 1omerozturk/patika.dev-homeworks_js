const fs= require('fs');

// File Creating

fs.writeFile('employee.json','{"name": "Employee 1 Name", "salary": 2000}',(err)=>{
    if(err) console.log(err);
    console.log('file created.');
})


// File Reading 

fs.readFile('employee.json','utf8',(err,data)=>{
    if(err) console.log(err);
    console.log('file reading procces...');
    console.log(data);
});

// File data update

fs.appendFile('employee.json',',{"name": "Ömer Öztürk", "salary": 200000}','utf-8',(err)=>{
    if(err) console.log(err);
    console.log('file data upddating...');
})

// File removing

fs.rm('employee.json',(err)=>{
    if(err) console.log(err);
    console.log('File removed.');
});