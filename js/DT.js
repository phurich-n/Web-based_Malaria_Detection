function DecisionTree(hist) {
    var classes
    if (hist[485] <= 0) {
        if (hist[413] <= 0) {
            if (hist[476] <= 0) {
                if (hist[477] <= 0) {
                    if (hist[357] <= 0) {
                        if (hist[412] <= 0.001) {
                            if (hist[0] <= 0.494) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Uninfected';
                            }
                        } else {
                            if (hist[395] <= 0) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        }
                    } else {
                        if (hist[333] <= 0.023) {
                            classes = 'Uninfected';
                        } else {
                            classes = 'Parasitized';
                        }
                    }
                } else {
                    if (hist[14] <= 0.084) {
                        if (hist[14] <= 0.01) {
                            if (hist[475] <= 0) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            if (hist[471] <= 0) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        }
                    } else {
                        if (hist[477] <= 0.004) {
                            if (hist[478] <= 0.001) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            if (hist[478] <= 0.011) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        }
                    }
                }
            } else {
                if (hist[11] <= 0) {
                    if (hist[412] <= 0.001) {
                        if (hist[473] <= 0) {
                            if (hist[23] <= 0.01) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            if (hist[482] <= 0) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        }
                    } else {
                        if (hist[469] <= 0.226) {
                            if (hist[470] <= 0.001) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        } else {
                            classes = 'Parasitized';
                        }
                    }
                } else {
                    if (hist[467] <= 0.001) {
                        if (hist[459] <= 0.011) {
                            if (hist[461] <= 0.002) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            classes = 'Uninfected';
                        }
                    } else {
                        if (hist[467] <= 0.006) {
                            if (hist[484] <= 0) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            classes = 'Parasitized';
                        }
                    }
                }
            }
        } else {
            if (hist[421] <= 0) {
                if (hist[405] <= 0.057) {
                    if (hist[397] <= 0.14) {
                        if (hist[413] <= 0.001) {
                            if (hist[420] <= 0.001) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            if (hist[386] <= 0.009) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        }
                    } else {
                        if (hist[326] <= 0.007) {
                            if (hist[450] <= 0.001) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            classes = 'Parasitized';
                        }
                    }
                } else {
                    if (hist[320] <= 0.001) {
                        if (hist[74] <= 0) {
                            if (hist[420] <= 0.002) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            classes = 'Parasitized';
                        }
                    } else {
                        if (hist[397] <= 0.234) {
                            classes = 'Parasitized';
                        } else {
                            classes = 'Uninfected';
                        }
                    }
                }
            } else {
                if (hist[424] <= 0) {
                    if (hist[429] <= 0.021) {
                        if (hist[411] <= 0) {
                            if (hist[437] <= 0.021) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        } else {
                            if (hist[389] <= 0.138) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        }
                    } else {
                        if (hist[260] <= 0) {
                            if (hist[413] <= 0.01) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            if (hist[393] <= 0.001) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        }
                    }
                } else {
                    if (hist[341] <= 0) {
                        if (hist[72] <= 0) {
                            classes = 'Uninfected';
                        } else {
                            classes = 'Parasitized';
                        }
                    } else {
                        classes = 'Parasitized';
                    }
                }
            }
        }
    } else {
        if (hist[471] <= 0.019) {
            if (hist[493] <= 0) {
                if (hist[478] <= 0.1) {
                    if (hist[462] <= 0) {
                        if (hist[477] <= 0.151) {
                            if (hist[485] <= 0.002) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            if (hist[492] <= 0.001) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        }
                    } else {
                        if (hist[485] <= 0.074) {
                            if (hist[428] <= 0) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Parasitized';
                            }

                        } else {
                            classes = 'Uninfected';
                        }
                    }
                } else {
                    if (hist[477] <= 0.022) {
                        if (hist[465] <= 0.007) {
                            if (hist[8] <= 0.001) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            classes = 'Parasitized';
                        }
                    } else {
                        if (hist[466] <= 0) {
                            if (hist[17] <= 0.004) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        } else {
                            if (hist[80] <= 0) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        }
                    }
                }
            } else {
                if (hist[504] <= 0.001) {
                    if (hist[498] <= 0.001) {
                        if (hist[494] <= 0.012) {
                            if (hist[4] <= 0) {
                                classes = 'Parasitized';
                            } else {
                                classes = 'Uninfected';
                            }
                        } else {
                            if (hist[501] <= 0) {
                                classes = 'Uninfected';
                            } else {
                                classes = 'Parasitized';
                            }
                        }
                    } else {
                        if (hist[0] <= 0.734) {
                            classes = 'Uninfected';
                        } else {
                            classes = 'Parasitized';
                        }
                    }
                } else {
                    if (hist[467] <= 0.001) {
                        classes = 'Uninfected';
                    } else {
                        classes = 'Parasitized';
                    }
                }
            }
        } else {
            if (hist[493] <= 0.001) {
                if (hist[470] <= 0.798) {
                    if (hist[468] <= 0.006) {
                        classes = 'Uninfected';
                    } else {
                        if (hist[473] <= 0.003) {
                            classes = 'Parasitized';
                        } else {
                            classes = 'Uninfected';
                        }
                    }
                } else {
                    classes = 'Parasitized';
                }
            } else {
                if (hist[24] <= 0) {
                    if (hist[460] <= 0) {
                        classes = 'Parasitized';
                    } else {
                        classes = 'Uninfected';
                    }
                } else {
                    if (hist[476] <= 0.002) {
                        classes = 'Parasitized';
                    } else {
                        classes = 'Uninfected';
                    }
                }
            }
        }
    }
    console.log(classes)
}