import { planTime } from './PlansData';
import { Lesson } from './Lesson';
import { PlanItem } from './Plans.interface';

const PlansTable = ({
  isDayOnly,
  currentDay,
  planData,
}: {
  isDayOnly: boolean;
  currentDay: number;
  planData: PlanItem[];
}) => {
  const getLessons = (row: number, col: number): PlanItem[] => {
    return planData.filter(({ day, lesson }) => day === col && lesson === row);
  };

  return (
    <table className="min-w-full text-left text-sm font-light">
      <thead className="border-b font-medium dark:border-neutral-200 dark:bg-neutral-200">
        <tr>
          <td scope="col" className="px-6 py-4"></td>
          {(!isDayOnly || currentDay === 1) && (
            <td scope="col" className="px-6 py-4">
              Pn
            </td>
          )}
          {(!isDayOnly || currentDay === 2) && (
            <td scope="col" className="px-6 py-4">
              Wt
            </td>
          )}
          {(!isDayOnly || currentDay === 3) && (
            <td scope="col" className="px-6 py-4">
              Śr
            </td>
          )}
          {(!isDayOnly || currentDay === 4) && (
            <td scope="col" className="px-6 py-4">
              Cz
            </td>
          )}
          {(!isDayOnly || currentDay === 5) && (
            <td scope="col" className="px-6 py-4">
              Pt
            </td>
          )}
        </tr>
      </thead>
      <tbody>
        {planTime.map((e, row) => (
          <tr key={`row-${row}`} className="border-b">
            <td className="whitespace-nowrap px-6 py-4">{planTime[row]}</td>
            {[...Array(isDayOnly ? 1 : 5)].map((e, col) => (
              <td key={`${row}-${col}`} className="whitespace-nowrap px-6 py-4">
                {getLessons(row, isDayOnly ? currentDay - 1 : col)?.map(
                  (lesson) => (
                    <Lesson
                      key={`lesson-${row}-${col}-${lesson.pupil}`}
                      lesson={lesson}
                    />
                  )
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlansTable;
