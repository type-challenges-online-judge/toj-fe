// 목데이터 전용으로 임시 생성.
export interface SubmitType {
  userId: string;
  problemId: number;
  submitNumber: number;
  accuracyScore: number;
  validate: number;
  codeLength: number; // Byte
  sumbitDate: string;
  code: string;
}
