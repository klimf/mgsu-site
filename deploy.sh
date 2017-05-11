#!/bin/bash
export SSHPASS=metallic
sftp -oBatchMode=no -b - admin@185.189.13.148 << !
    metallic
   mput ./efDev/* -r
   bye
!