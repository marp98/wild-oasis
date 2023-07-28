import { formatDistance, parseISO } from 'date-fns';
import { differenceInDays } from 'date-fns/esm';

interface Options {
    end?: boolean;
  }

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1: string, dateStr2: string) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr: string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace('about ', '')
    .replace('in', 'In');

// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options: Options = {}) {
    const today = new Date();
  
    if (options.end)
      today.setUTCHours(23, 59, 59, 999);
    else today.setUTCHours(0, 0, 0, 0);
  
    return today.toISOString();
  };

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(
    value
  );