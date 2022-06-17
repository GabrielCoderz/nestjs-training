import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: 'Fundamentos de Next',
            description: 'Fundamentos',
            tags: ['nodejs', 'nestjs', 'js']
        }
    ];

    findAll() {
        return this.courses;
    }

    findOne(id: string) {
        const course = this.courses.find(course => course.id === +id);

        if(!course) {
            throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND);
        }

        return course;
    }

    create(createCourseDto: any) {
        this.courses.push(createCourseDto);
        return createCourseDto;
    }

    update(id: string, updateCourseDto: any) {
        const indexCourse = this.courses.findIndex(course => course.id === +id); // -1 because doesn't indexCourse
        
        this.courses[indexCourse] = updateCourseDto;
    }

    delete(id: string) {
        const indexCourse = this.courses.findIndex(course => course.id === +id);

        indexCourse > 0 && this.courses.splice(indexCourse, 1);
    }
}
