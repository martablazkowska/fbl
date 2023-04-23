import { useMemo, ChangeEvent, useState } from 'react';

import { getCurrentDay, isWeekendToday } from '../../../helpers/DateAndTime';
import Switcher from '../../common/Switcher/Switcher';
import Filters from '../../common/Filters/Filters';
import { planData } from './PlansData';
import { PUPILS } from './Plans.constants';
import PlansTable from './PlansTable';
import { PlansWrapper, TableScrollable } from './Plans.style';

export function Plans() {
  const [isDayOnly, setIsDayOnly] = useState(() => !isWeekendToday());
  const [pupilsSelected, setPupilsSelected] = useState<Record<string, boolean>>(
    () => pupilsSelectionInitialState()
  );

  const currentDay = useMemo(() => getCurrentDay(), []);
  const filteredPlanData = useMemo(
    () => filterPlanByPupilAndDate(),
    [pupilsSelected, planData, isDayOnly]
  );

  function pupilsSelectionInitialState() {
    return Object.assign(
      {},
      ...Object.entries(PUPILS).map(([pupil]) => ({ [pupil]: true }))
    );
  }

  function filterPlanByPupilAndDate() {
    return planData.filter(
      ({ pupil, day }) =>
        !!pupilsSelected[pupil] && (day === currentDay - 1 || !isDayOnly)
    );
  }

  const handleIsDayOnlyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDayOnly(e.target.checked);
  };

  return (
    <PlansWrapper>
      <Filters
        options={pupilsSelected}
        handleFiltersChange={setPupilsSelected}
      />
      <Switcher
        isChecked={isDayOnly}
        handleChange={handleIsDayOnlyChange}
        label="The current day only?"
        id="currentDayOnly"
      />
      <TableScrollable>
        <PlansTable
          isDayOnly={isDayOnly}
          currentDay={currentDay}
          planData={filteredPlanData}
        />
      </TableScrollable>
    </PlansWrapper>
  );
}

export default Plans;
