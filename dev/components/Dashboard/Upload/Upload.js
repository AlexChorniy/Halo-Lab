import React from 'react';
import UploadSVG from '../../../assets/img/folder-regular.svg';

import {
    UploadContainer,
    UploadElement,
    UploadFileCounter,
    FileSvgUpload,
    UploadLabel
} from '../styles';

const clientWidth = window.innerWidth;

const Upload = ({
    fileSelectedHandler,
    getFiles,
}) => {
    return (
        <>
            <UploadContainer>
                <UploadLabel><FileSvgUpload src={UploadSVG} />{clientWidth <= 831 ? "" : 'Add file as attachment'}</UploadLabel>
                <UploadFileCounter>{clientWidth <= 831 ? getFiles.length : `${getFiles.length} files attached`} </UploadFileCounter>
            </UploadContainer>
            <UploadElement onChange={fileSelectedHandler} />
        </>
    );
};

export default Upload;

