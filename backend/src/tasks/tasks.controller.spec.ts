import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { Task } from './models/task.model';
import { TasksService } from './tasks.service';

describe('TasksController', () => {
  let controller: TasksController;
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();

    controller = module.get<TasksController>(TasksController);
    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createTask', () => {
    it('should create a new task', () => {
      const newTask: Task = {
        id: 1,
        content: 'Test task',
        done: false,
      };

      jest.spyOn(service, 'createTask').mockReturnValue(newTask);

      const createdTask = controller.createTask(newTask);
      expect(createdTask).toBe(newTask);
    });
  });

  describe('deleteTask', () => {
    it('should delete a task', () => {
      const taskId = '1';
      const taskToDelete: Task = {
        id: 1,
        content: 'Test task',
        done: false,
      };

      jest.spyOn(service, 'deleteTask').mockReturnValue(taskToDelete);

      const deletedTask = controller.deleteTask(taskId);
      expect(deletedTask).toBe(taskToDelete);
    });

    describe('updateTask', () => {
      it('should update a task', () => {
        const taskId = '1';
        const updatedTask: Task = {
          id: 1,
          content: 'Updated task',
          done: true,
        };

        jest.spyOn(service, 'updateTask').mockReturnValue(updatedTask);

        const result = controller.updateTask(updatedTask, taskId);

        expect(service.updateTask).toHaveBeenCalledWith(
          taskId,
          updatedTask.done,
        );
        expect(result).toBe(updatedTask);
      });
    });
  });
});
