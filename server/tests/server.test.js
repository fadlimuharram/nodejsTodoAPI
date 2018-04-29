const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done)=>{
    Todo.remove({}).then(()=> done());
});
describe('POST /todos',()=>{
    it('should create new todo',(done)=>{
        var tulisan = 'Test todo tulisan';

        request(app)
            .post('/todos')
            .send({ tulisan })
            .expect(200)
            .expect((response)=>{
                expect(response.body.tulisan).toBe(tulisan);
            })
            .end((error,response)=>{
                if(error){
                    return done(error);
                }

                Todo.find().then((todos)=>{
                    expect(todos.length).toBe(1);
                    expect(todos[0].tulisan).toBe(tulisan);
                    done();
                }).catch((error)=>{
                    return done(error);
                })
            });
    });


});
