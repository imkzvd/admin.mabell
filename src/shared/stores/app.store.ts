export const useAppStore = defineStore('app', () => {
  const [isSearchDialogVisible, toggleSearchDialogVisible] = useToggle();

  return {
    isSearchDialogVisible,
    toggleSearchDialogVisible,
  };
});
