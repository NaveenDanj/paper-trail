import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

type IProp = {
    message: string;
}

export default function SuccessAlert({ message }: IProp) {
    return (
        <Alert className="text-green-500" variant="default">
            <CheckCircleOutlineIcon style={{ color: 'green', marginRight: 10 }} className="mr-2 text-green-500" />
            <AlertTitle className="text-green-500">Success!</AlertTitle>
            <AlertDescription>
                {message}
            </AlertDescription>
        </Alert>
    )
}