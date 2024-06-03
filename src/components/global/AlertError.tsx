
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

export function AlertError({ errorMassage }: { errorMassage: string }) {
    return (
        <Alert variant="destructive">
            <ReportProblemOutlinedIcon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                {errorMassage}
            </AlertDescription>
        </Alert>
    )
}
