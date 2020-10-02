export interface ISnackBarNotification {
  message: string;
  action?: string;
  snackType?: string;
  duration?: number;
}
export class SnackBarNotification implements ISnackBarNotification {
  public message: '';
  public action?: '';
  public snackType?: '';
  public duration?: 5000;
}
