import { useToast } from 'vue-toastification';

export function useNotification() {
  const toast = useToast();

  function showSuccessMessage(text: string = 'Success!') {
    toast.success(text);
  }

  function showInfoMessage(text: string = 'Hmmm...') {
    toast.info(text);
  }

  function showWarningMessage(text: string = 'Stop! Are u sure?') {
    toast.warning(text);
  }

  function showErrorMessage(text: string = 'Error!!!') {
    toast.error(text);
  }

  return {
    showSuccessMessage,
    showInfoMessage,
    showWarningMessage,
    showErrorMessage,
  };
}
