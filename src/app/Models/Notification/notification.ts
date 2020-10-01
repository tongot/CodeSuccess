interface ISnackBarNotification {
  message: string;
  action?: string;
  snackType?: string;
  duration?: number;
}
export class SnackBarNotification implements ISnackBarNotification {
  public message: string;
  public action?: string;
  public snackType?: string;
  public duration?: number;
}
