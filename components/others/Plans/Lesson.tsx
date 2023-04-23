import { FC } from 'react';
import { PlanItem } from './plans.interface';

interface LessonProps {
  lesson: PlanItem;
}

export const Lesson: FC<LessonProps> = ({ lesson }: LessonProps) => {
  return (
    <div>
      {lesson.subject} ({lesson.pupil})
    </div>
  );
};
