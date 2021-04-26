import { parseISO, format } from 'date-fns';

const Date = ({ dateString }) =>
{

  // Uses date-fns module to make date string look pretty
  const date = parseISO(dateString);
  
  return (
    <time dateTime={dateString}>
        {format(date, 'LLLL d, yyyy')}
    </time>
    );
}

export default Date;