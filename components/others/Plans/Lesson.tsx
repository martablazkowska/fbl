import { FC } from 'react';
import { PlanItem } from './Plans.interface';

interface LessonProps {
  lesson: PlanItem;
}

export const Lesson: FC<LessonProps> = ({ lesson }: LessonProps) => (
  <div>
    {lesson.subject} ({lesson.pupil})
  </div>
);
