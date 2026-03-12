export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();


  if (date.toDateString() === now.toDateString()) {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  }


  return date.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
};
